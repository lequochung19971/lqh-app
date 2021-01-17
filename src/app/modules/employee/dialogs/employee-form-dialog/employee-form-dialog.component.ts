import { Component } from '@angular/core';
import { BaseDialogComponent } from '@core/components/base-dialog/base-dialog.component';

@Component({
  selector: 'lqh-employee-form-dialog',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.scss']
})
export class EmployeeFormDialogComponent extends BaseDialogComponent  {

  constructor() { 
    super();
  }

}
