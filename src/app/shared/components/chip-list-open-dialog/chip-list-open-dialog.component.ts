import { Component, Input } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { DialogConfig } from '../../../core/interfaces-abstracts/dialog-config.interface';
import { DatasourceMetadata } from '../../../core/interfaces-abstracts/data-source-metadata.interface';
import { BaseControl } from '../../../core/components/base-control/base-control.component';
import { ControlOpenDialog } from 'src/app/core/interfaces-abstracts/control-open-dialog.interface';

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
  @Input() allowAdd: boolean = true;
  @Input() allowDuplicate: boolean = false;
  @Input() dialogConfig: DialogConfig;
  @Input() disable: boolean;

  initialFormControlValue: any[] = [];
  dataSource: any;
  
  constructor(protected dialogService: DialogService) { 
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initDataSource();
  }

  protected initDataSource() {
    this.dataSource = this.formControl.value;
  }

  getLabel(data: any) {
    return data[this.dataSourceMetadata.label];
  }

  getValue(data: any) {
    return data[this.dataSourceMetadata.value];
  }

  openDialog() {
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe(data => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    })
  }

  protected handleAfterDialogClose(data) {
    this.updateDataSource(data);
    this.patchControlValue(this.dataSource);
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
