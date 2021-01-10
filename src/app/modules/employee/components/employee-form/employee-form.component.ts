import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../../core/interfaces-abstracts/data-source-metadata.interface';
import { AddressDialogComponent } from '../../../../shared/components/address/address-dialog.component';
import { FormControl } from '@angular/forms';
import { AddressModel, Address } from '../../../../core/models/address.model';

@Component({
  selector: 'lqh-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getDialogConfigForChipList(): DialogConfig {
    return {
      title: 'provincesAddressDialogTitle',
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

  addressInfoModel: any = new AddressModel();
  getDialogConfigForAddressInput(): DialogConfig {
    return {
      title: 'provincesAddressDialogTitle',
      component: AddressDialogComponent,
      componentInstance: {
        isFullAddressMode: true,
        dataModel: this.addressInfoModel
      },
      height: '550px',
      width: '850px'
    }
  }

  addressInfoControl: FormControl = new FormControl('');
  onDialogClosedForAddressInput(data: Address) {
    if (data) {
      this.addressInfoControl.patchValue(data.pathWithType);
    }
  }
}
