import { MatDialogConfig } from "@angular/material/dialog";

export interface DialogConfig extends MatDialogConfig {
  title?: string;
  component?: any;
  componentInstance?:any;
  rightSide?: boolean;
}