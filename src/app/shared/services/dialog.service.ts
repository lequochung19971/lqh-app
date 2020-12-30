import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/interfaces-abstracts/dialog-data.interface';
import { LqhDialogShellComponent } from '../components/lqh-dialog-shell/lqh-dialog-shell.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    protected dialog: MatDialog,
    
  ) { }

  openDialogFullPage<TDialog>(component: Type<TDialog>, data?: DialogData) {
    return this.dialog.open(LqhDialogShellComponent, {
      width: data?.width || '100%',
      height: data?.height || '100%',
      maxHeight: data?.maxHeight ||'100%',
      maxWidth: data?.maxWidth || '100%',
      position: data?.position || { top: '0' },
      disableClose: data?.disableClose || true,
      autoFocus: data?.autoFocus || true,
      panelClass: data?.panelClass || 'lqh-full-dialog',
      data: { ...(data ? data : {}), component }
    });
  }
}
