import { Component, Input, Optional, Self } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { ControlOpenDialog } from '@core/interfaces-abstracts/control-open-dialog.interface';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { DialogService } from '@shared/services/dialog.service';
import { DataSourceComponent } from '@core/components/data-source/data-source.component';

@Component({
  selector: 'lqh-chip-list-open-dialog',
  templateUrl: './chip-list-open-dialog.component.html',
  styleUrls: ['./chip-list-open-dialog.component.scss']
})
export class ChipListOpenDialogComponent extends DataSourceComponent implements ControlOpenDialog {
  @Input() manyItems = false;
  @Input() allowDuplicate = false;
  @Input() dialogConfig: DialogConfig;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected translateService: TranslateService,
    protected dialogService: DialogService
  ) { 
    super(ngControl, translateService);
  }

  writeValue(val: any | any[]): void {
    if (this.dataSource) {
      this.updateDataSource(val);
    }

    if (!this.dataSource && val) {
      this.initDataSource(val);
    }

    const hasOnlyOneItem = !!(val?.length === 1);
    if (hasOnlyOneItem) {
      this.bindTwoWay(this.dataSource[0]);
    } else {
      this.bindTwoWay(this.dataSource);
    }
  }

  protected initDataSource(value: any): void {
    if (Array.isArray(value) && value.length) {
      this.dataSource = value;
    } else {
      this.dataSource = [];
      this.dataSource.push(value);
    }
  }

  openDialog(): void {
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe(data => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    });
  }

  protected handleAfterDialogClose(data: any): void {
    this.writeValue(data);
  }

  protected updateDataSource(data: any): void {
    const canDuplicate = this.allowDuplicate || !this.checkDuplicate(data);
    if (this.manyItems) {
      if (canDuplicate) {
        this.dataSource.push(data);
      }
    } else {
      this.dataSource[0] = data;
    }
  }

  protected checkDuplicate(data: any): boolean {
    return !!this.dataSource.find(source => source === data || this.getValue(source) === this.getValue(data));
  }
}
