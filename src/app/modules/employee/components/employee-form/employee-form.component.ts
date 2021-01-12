import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../../core/interfaces-abstracts/data-source-metadata.interface';
import { AddressDialogComponent } from '../../../../shared/components/address/address-dialog.component';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { UtilitiesService } from '../../../../shared/services/utilities.service';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'lqh-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  viewModel: any;

  constructor(
    protected employeeService: EmployeeService,
    protected utilitiesService: UtilitiesService
  ) { 
  }

  ngOnInit(): void {
    this.form = this.employeeService.getCurrentForm();
    this.viewModel = this.employeeService.getViewModel();
    this.form.valueChanges.subscribe(val => {
      console.log(val);
    })
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
}
