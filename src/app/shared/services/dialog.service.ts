import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { LqhDialogShellCustomComponent } from '@shared/components/lqh-dialog-shell-custom/lqh-dialog-shell-custom.component';
import { LqhDialogShellComponent } from '@shared/components/lqh-dialog-shell/lqh-dialog-shell.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    protected dialog: MatDialog,
    
  ) { }

  openCustomDialog(dialogConfig: DialogConfig): MatDialogRef<LqhDialogShellCustomComponent> {
    return this.dialog.open(LqhDialogShellCustomComponent, {
      width: dialogConfig?.width,
      height: dialogConfig?.height,
      maxHeight: dialogConfig?.maxHeight,
      maxWidth: dialogConfig?.maxWidth,
      position: dialogConfig?.position,
      disableClose: dialogConfig?.disableClose || false,
      autoFocus: dialogConfig?.autoFocus || false,
      panelClass: dialogConfig?.panelClass || 'lqh-dialog',
      data: dialogConfig
    });
  }

  openDialogFullPage(dialogConfig: DialogConfig): MatDialogRef<LqhDialogShellComponent> {
    return this.dialog.open(LqhDialogShellComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      position: { top: '0' },
      disableClose: dialogConfig?.disableClose || true,
      autoFocus: dialogConfig?.autoFocus || true,
      panelClass: dialogConfig?.panelClass || 'lqh-full-dialog',
      data: dialogConfig
    });
  }
}
