import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LqhDialogShellCustomComponent } from '@shared/components/lqh-dialog-shell-custom/lqh-dialog-shell-custom.component';
import { ComponentInstance } from './component-instance.interface';
import { LqhDialogShellComponent } from '../../shared/components/lqh-dialog-shell/lqh-dialog-shell.component';
import { BaseModel } from '../models/base.model';

export interface DialogConfig extends MatDialogConfig {
  title?: string;
  component?: any;
  componentInstance?: DialogInstance;
  rightSide?: boolean;
}
export interface DialogInstance extends ComponentInstance {
  currentDialogRef?: MatDialogRef<DialogRefType>;
  viewModel?: BaseModel;
  parentViewMode?: BaseModel;
  metadata?: any;
}


export type DialogRefType = LqhDialogShellCustomComponent | LqhDialogShellComponent;
