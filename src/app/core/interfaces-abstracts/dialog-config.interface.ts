import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LqhDialogShellCustomComponent } from '@shared/components/lqh-dialog-shell-custom/lqh-dialog-shell-custom.component';
import { ComponentInstance } from './component-instance.interface';
import { LqhDialogShellComponent } from '../../shared/components/lqh-dialog-shell/lqh-dialog-shell.component';

export interface DialogConfig extends MatDialogConfig {
  title?: string;
  component?: any;
  componentInstance?:DialogInstance;
  rightSide?: boolean;
}
export interface DialogInstance extends ComponentInstance {
  currentDialogRef?: MatDialogRef<DialogRefType>;
}


export type DialogRefType = LqhDialogShellCustomComponent | LqhDialogShellComponent;