import { Component, Input, Optional, Self } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@core/components/base-control/base-control.component';
import { ControlOpenDialog } from '@core/interfaces-abstracts/control-open-dialog.interface';
import { DatasourceMetadata } from '@core/interfaces-abstracts/data-source-metadata.interface';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { DialogService } from '@shared/services/dialog.service';

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
  @Input() manyItems: boolean = false;
  @Input() allowDuplicate: boolean = false;
  @Input() dialogConfig: DialogConfig;
  @Input() disable: boolean;

  dataSource: any[];
  
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService,
    protected translateService: TranslateService
  ) { 
    super(ngControl);
  }

  ngOnInit(): void {
  }

  writeValue(val: any | any[]): void {
    if (this.dataSource) {
      this.updateDataSource(val);
    }

    if (!this.dataSource && val) {
      this.initDataSource(val)
    }

    this.onTouched();

    const hasOnlyOneItem = !!(val?.length === 1)
    if (hasOnlyOneItem) {
      this.onChanged(this.dataSource[0]);
    } else {
      this.onChanged(this.dataSource);
    }
  }

  protected initDataSource(value: any) {
    if (Array.isArray(value) && value.length) {
      this.dataSource = value;
    } else {
      this.dataSource = [];
      this.dataSource.push(value);
    }
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
    const canDuplicate = this.allowDuplicate || !this.checkDuplicate(data);
    if (this.manyItems || !this.dataSource?.length) {
      if (canDuplicate) {
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
