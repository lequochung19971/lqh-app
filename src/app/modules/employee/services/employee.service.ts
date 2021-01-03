import { Injectable } from '@angular/core';
import { DialogService } from '../../../shared/services/dialog.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    protected dialogService: DialogService
  ) { }

  // openFormDialog(): void {
  //   const dialogConfig: DialogConfig = {
  //     title: 'Create Employee',
  //     component: EmployeeFormDialogComponent
  //   }
  //   this.dialogService.openDialog(dialogConfig);
  // }
}
