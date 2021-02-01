import { Component, Input, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '@core/components/base-component/base.component';
import { DialogMetadataBuilderConfig } from '@core/interfaces-abstracts/builder-config.interface';
import { DialogRefType } from '@core/interfaces-abstracts/dialog-config.interface';
import { DepartmentModel } from '@core/models/department.model';
import { EmployeeModel } from '@core/models/employee.model';
import { PositionModel } from '@core/models/position.model';
import { JsonConfigService } from '@core/services/json-config.service';
import { EmployeeFormService } from '@modules/employee/services/employee-form.service';
import { UtilitiesService } from '@shared/services/utilities.service';
import { Dayjs } from 'dayjs';
import { EmployeeRestService } from '../../services/employee-rest.service';
import { cloneDeep } from 'lodash';
import { BindingViewModelFn } from '@core/components/base-control/base-control.component';
@Component({
  selector: 'lqh-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  providers: [
    {
      provide: EmployeeFormService, useClass: EmployeeFormService
    }
  ]
})
export class EmployeeFormComponent extends BaseComponent implements OnInit, AfterViewInit {
  @Input() viewModel: EmployeeModel;
  form: FormGroup;
  departments: DepartmentModel[];
  positions: PositionModel[];
  currentDialogRef: MatDialogRef<DialogRefType>;

  constructor(
    protected employeeRestService: EmployeeRestService,
    protected employeeFormService: EmployeeFormService,
    protected utilitiesService: UtilitiesService,
    protected jsonConfigService: JsonConfigService,
    protected changeDetectorRef: ChangeDetectorRef
  ) { 
    super();
  }

  ngOnInit(): void {
    this.viewModel = this.viewModel || new EmployeeModel();
    this.employeeFormService.initialize(cloneDeep(this.viewModel));
    this.form = this.employeeFormService.form;
    this.departments = this.jsonConfigService.getDepartmentsConfig();
    this.currentDialogRef = (this.getMetadataBuilderConfig() as DialogMetadataBuilderConfig).currentDialogRef;
    this.filterPositions();
    this.disablePasswordField();
  }

  ngAfterViewInit(): void {
    this.forcingChangeDetection(this.changeDetectorRef);
  }

  dateChange(): void {
    const dobControl = this.form.get('dob');
    if (dobControl.valid) {
      this.updateAge(dobControl?.value);
    }
  }

  updateAge(date: Dayjs | string): void {
    const ageControl = this.form.get('age');
    const age: string = this.utilitiesService.calculateAgeByDOB(date);
    ageControl.patchValue(age);
  }

  formHasChaned(): boolean {
    return this.employeeFormService.hasChanged();
  }

  formHasError(): boolean {
    return this.employeeFormService.hasError();
  }

  filterPositions(): void {
    const departmentGroup = this.form.get('department');
    departmentGroup.valueChanges.subscribe((value: string) => {
      if (value) {
        this.positions = this.jsonConfigService.getPositionsConfig().filter(pos => pos.departmentId === value);
      }
    });
  }

  saveEmployee(): void {
    const avatarFile = this.form.get('avatar').value;
    this.employeeRestService.uploadAvatar(avatarFile as File).subscribe(image => {
      this.viewModel.avatar = image.fileUrl;
      if (this.isCreateMode(this.viewModel)) {
        this.employeeRestService.createEmployee(this.viewModel).subscribe(res => {
          if (res) {
            this.currentDialogRef.close(res);
          }
        });
      } else {
        this.employeeRestService.updateEmployee(this.viewModel).subscribe(res => {
          if (res) {
            this.currentDialogRef.close(res);
          }
        });
      }
    });
  }

  convertDepartmentModel(): BindingViewModelFn {
    return ({value}) => {
      const currentDepartmentModel = this.departments.find(department => department.id === value);
      return currentDepartmentModel;
    };
  }

  convertPositionModel(): BindingViewModelFn {
    return ({value}) => {
      const currentPositionModel = this.positions.find(department => department.id === value);
      return currentPositionModel;
    };
  }

  isCreateMode(viewModel: EmployeeModel): boolean {
    return !viewModel._id;
  }

  isEditMode(viewModel: EmployeeModel): boolean {
    return !!viewModel._id;
  }

  disablePasswordField(): void {
    if (this.isEditMode) {
      this.form.get('password').disable();
      this.form.get('confirmPassword').disable();
    }
  }
}
