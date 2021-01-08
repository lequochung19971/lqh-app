import { Component, Input } from '@angular/core';
import { BaseControl } from 'src/app/core/components/base-control/base-control.component';
import { ControlOpenDialog } from 'src/app/core/interfaces-abstracts/control-open-dialog.interface';
import { DialogConfig } from 'src/app/core/interfaces-abstracts/dialog-config.interface';

@Component({
  selector: 'lqh-input-open-dialog',
  templateUrl: './input-open-dialog.component.html',
  styleUrls: ['./input-open-dialog.component.scss']
})
export class InputOpenDialogComponent extends BaseControl implements ControlOpenDialog {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() disable: boolean = false;
  @Input() type: string = 'text';
  @Input() dialogConfig: DialogConfig;

  initialFormControlValue: string = '';

  constructor() { 
    super();
  }
  openDialog(): void {
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
