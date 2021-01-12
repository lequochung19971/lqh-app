import { Injectable } from '@angular/core';
import { DialogService } from '../../../shared/services/dialog.service';
import { EmployeeFormService } from './employee-form.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    protected dialogService: DialogService,
    protected employeeFormService: EmployeeFormService
  ) { 
  }

  getCurrentForm() {
    return this.employeeFormService.form;
  }

  getViewModel() {
    return this.employeeFormService.form.value;
  }

  // openFormDialog(): void {
  //   const dialogConfig: DialogConfig = {
  //     title: 'Create Employee',
  //     component: EmployeeFormDialogComponent
  //   }
  //   this.dialogService.openDialog(dialogConfig);
  // }
}
