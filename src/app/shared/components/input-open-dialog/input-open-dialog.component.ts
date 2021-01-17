import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { ControlOpenDialog } from '@core/interfaces-abstracts/control-open-dialog.interface';
import { DatasourceMetadata } from '@core/interfaces-abstracts/data-source-metadata.interface';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'lqh-input-open-dialog',
  templateUrl: './input-open-dialog.component.html',
  styleUrls: ['./input-open-dialog.component.scss']
})
export class InputOpenDialogComponent implements ControlOpenDialog {
  @Input() dataSourceMetadata: DatasourceMetadata = {
    label: 'label',
    value: 'value'
  }
  @Input() placeholder: string;
  @Input() label: string;
  @Input() disable: boolean = false;
  @Input() type: string = 'text';
  @Input() dialogConfig: DialogConfig;
  @Input() required: boolean = false;
  @Input() dialogOnClosed: any;
  @Input() formControl: FormControl;

  constructor(
    protected dialogService: DialogService,
    protected translateService: TranslateService
  ) { 
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe(data => {
      this.dialogOnClosed(data);
    })
  }

  preventInput(event) {
    event.preventDefault();
  }
}
