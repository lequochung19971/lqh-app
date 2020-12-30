import { MatDialogConfig } from "@angular/material/dialog";

export interface DialogData extends MatDialogConfig {
  title?: string;
  component?: any;
}