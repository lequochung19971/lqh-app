import { Component } from '@angular/core';
import { BaseDialogComponent } from '@core/components/base-dialog/base-dialog.component';
import { EmployeeModel } from '../../../../core/models/employee.model';

@Component({
  selector: 'lqh-employee-form-dialog',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.scss']
})
export class EmployeeFormDialogComponent extends BaseDialogComponent  {

  constructor() { 
    super();
    this.viewModel = this.viewModel || new EmployeeModel();
  }

}
