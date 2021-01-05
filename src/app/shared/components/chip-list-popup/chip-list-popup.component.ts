import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogService } from '../../services/dialog.service';
import { DialogConfig } from '../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../core/interfaces-abstracts/data-source-metadata.interface';
import { BaseControl } from '../../../core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-chip-list-popup',
  templateUrl: './chip-list-popup.component.html',
  styleUrls: ['./chip-list-popup.component.scss']
})
export class ChipListPopupComponent extends BaseControl implements OnInit {
  @Input() dataSourceMetadata: DatasourceMetadata = {
    label: 'label',
    value: 'value'
  }
  @Input() allowAdd: boolean = false;
  @Input() dialogConfig: DialogConfig;
  @Input() formControl: FormControl = new FormControl([]);
  dataSource: any;
  
  constructor(protected dialogService: DialogService) { 
    super();
  }

  ngOnInit(): void {
    this.initDataSource();
  }

  protected initDataSource() {
    this.dataSource = this.formControl.value;
  }

  protected handleAfterDialogClose(data) {
    if (this.allowAdd) {
      this.updateMoreForDataSource(data);
    } else {
      this.replaceCurrentData(data);
    }
    this.patchControlValue(this.dataSource);
  }
  
  getLabel(data: any) {
    return data[this.dataSourceMetadata.label];
  }

  getValue(data: any) {
    return data[this.dataSourceMetadata.value];
  }

  openPopup() {
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe(data => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    })
  }

  protected updateMoreForDataSource(data: any) {
    if (!this.checkExistence(data)) {
      this.dataSource.push(data);
    }
  }

  protected checkExistence(data: any) {
    return !!this.dataSource.find(source => source === data || this.getValue(source) === this.getValue(data));
  }

  protected replaceCurrentData(data: any) {
    if (this.dataSource?.length) {
      this.dataSource[0] = data;
    } else {
      this.updateMoreForDataSource(data);
    }
  }
}
