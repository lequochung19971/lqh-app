import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../../core/interfaces-abstracts/data-source-metadata.interface';
import { AddressDialogComponent } from '../../../../shared/components/address/address-dialog.component';

@Component({
  selector: 'lqh-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getChiplistPopupConfig(): DialogConfig {
    return {
      title: 'Provinces',
      component: AddressDialogComponent,
      componentInstance: {
        isFullAddressMode: true
      },
      height: '550px',
      width: '850px',
      maxHeight: '550px',
      maxWidth: '850px'
    }
  }
  
  getChiplistDataSourceMetadata(): DatasourceMetadata {
    return {
      label: 'nameWithType',
      value: 'code'
    }
  }

}
