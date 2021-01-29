import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '@core/components/base-component/base.component';
import { DatasourceMetadata } from '@core/interfaces-abstracts/data-source-metadata.interface';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { AddressDialogComponent } from '@shared/components/address/address-dialog.component';
import { IDCardModel } from '../../../../core/models/id-card.model';
import { EmployeeModel } from '../../../../core/models/employee.model';

@Component({
  selector: 'lqh-employee-id-card',
  templateUrl: './employee-id-card.component.html',
  styleUrls: ['./employee-id-card.component.scss']
})
export class EmployeeIdCardComponent extends BaseComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() parentViewModel: EmployeeModel;
  @Input() viewModel: IDCardModel;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.viewModel = this.viewModel ?? new IDCardModel();
    super.ngOnInit();
  }
  
  getChiplistDataSourceMetadata(): DatasourceMetadata {
    return {
      display: 'nameWithType',
      value: 'code'
    };
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
    };
  }
}
