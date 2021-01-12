import { Component, Input, Optional, Self } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { DialogConfig } from '../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../core/interfaces-abstracts/data-source-metadata.interface';
import { ControlOpenDialog } from 'src/app/core/interfaces-abstracts/control-open-dialog.interface';
import { TranslateService } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from 'src/app/core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-chip-list-open-dialog',
  templateUrl: './chip-list-open-dialog.component.html',
  styleUrls: ['./chip-list-open-dialog.component.scss']
})
export class ChipListOpenDialogComponent extends BaseControl implements ControlOpenDialog {
  @Input() dataSourceMetadata: DatasourceMetadata = {
    label: 'label',
    value: 'value'
  }
  @Input() allowAdd: boolean = false;
  @Input() allowDuplicate: boolean = false;
  @Input() dialogConfig: DialogConfig;
  @Input() disable: boolean;

  dataSource: any;
  
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService,
    protected translateService: TranslateService
  ) { 
    super(ngControl);
  }

  ngOnInit(): void {
  }

  writeValue(val: any): void {
    if (this.dataSource) {
      this.updateDataSource(val);
    }

    if (!this.dataSource && val) {
      this.initDataSource(val)
    }

    this.onTouched();
    this.onChanged(this.dataSource);
  }

  protected initDataSource(value: any) {
    this.dataSource = value;
  }

  getLabel(data: any) {
    return this.translateService.instant(data[this.dataSourceMetadata.label] || '');
  }

  getValue(data: any) {
    return this.translateService.instant(data[this.dataSourceMetadata.value] || '');
  }

  openDialog() {
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe(data => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    })
  }

  protected handleAfterDialogClose(data: any) {
    this.writeValue(data);
  }

  protected updateDataSource(data: any) {
    if (this.allowAdd || !this.dataSource?.length) {
      if (this.allowDuplicate || !this.checkDuplicate(data)) {
        this.dataSource.push(data);
      }
    } else {
      this.dataSource[0] = data;
    }
  }

  protected checkDuplicate(data: any) {
    return !!this.dataSource.find(source => source === data || this.getValue(source) === this.getValue(data));
  }
}
