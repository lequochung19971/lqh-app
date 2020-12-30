import { Injectable } from '@angular/core';
import { DialogService } from '../../../shared/services/dialog.service';
import { EmployeeFormDialogComponent } from '../dialogs/employee-form-dialog/employee-form-dialog.component';
import { DialogData } from '../../../core/interfaces-abstracts/dialog-data.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    protected dialogService: DialogService
  ) { }

  openFormDialog(dialogData?: DialogData): void {
    this.dialogService.openDialogFullPage(EmployeeFormDialogComponent, dialogData)
  }
}
