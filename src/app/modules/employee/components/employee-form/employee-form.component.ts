import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '@core/components/base-component/base.component';
import { DialogMetadataBuilderConfig } from '@core/interfaces-abstracts/builder-config.interface';
import { DatasourceMetadata } from '@core/interfaces-abstracts/data-source-metadata.interface';
import { DialogConfig, DialogRefType } from '@core/interfaces-abstracts/dialog-config.interface';
import { DepartmentModel } from '@core/models/department.model';
import { PositionModel } from '@core/models/position.model';
import { JsonConfigService } from '@core/services/json-config.service';
import { EmployeeFormService } from '@modules/employee/services/employee-form.service';
import { AddressDialogComponent } from '@shared/components/address/address-dialog.component';
import { UtilitiesService } from '@shared/services/utilities.service';
import { Dayjs } from 'dayjs';
import { EmployeeRestService } from '../../services/employee-rest.service';

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
export class EmployeeFormComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  viewModel: any;
  departments: DepartmentModel[];
  positions: PositionModel[];
  currentDialogRef: MatDialogRef<DialogRefType>

  constructor(
    protected employeeRestService: EmployeeRestService,
    protected employeeFormService: EmployeeFormService,
    protected utilitiesService: UtilitiesService,
    protected jsonConfigService: JsonConfigService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.form = this.employeeFormService.form;
    this.viewModel = this.employeeFormService.getViewModel();
    this.departments = this.jsonConfigService.getDepartmentsConfig();
    this.currentDialogRef = (this.getMetadataBuilderConfig() as DialogMetadataBuilderConfig).currentDialogRef;
    this.filterPositions();
  }

  getDialogConfigForChipList(): DialogConfig {
    return {
      title: 'PROVINCE_ADDRESS_DIALOG_TITLE',
      component: AddressDialogComponent,
      componentInstance: {
        isFullAddressMode: false
      },
      height: '550px',
      width: '850px'
    }
  }
  
  getChiplistDataSourceMetadata(): DatasourceMetadata {
    return {
      label: 'nameWithType',
      value: 'code'
    }
  }

  dateChange() {
    const dobControl = this.form.get('dob');
    if (dobControl.valid) {
      this.updateAge(dobControl?.value);
    }
  }

  updateAge(date: Dayjs | string) {
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
    this.form.get('department').valueChanges.subscribe((value: DepartmentModel) => {
      if (value) {
        this.positions = this.jsonConfigService.getPositionsConfig().filter(pos => pos.departmentId === value.id)
      }
    })
  }

  saveEmployee() {
    this.employeeRestService.createEmployee(this.form.value).subscribe(res => {
      if (res) {
        this.currentDialogRef.close()
      }
    });
  }
}
