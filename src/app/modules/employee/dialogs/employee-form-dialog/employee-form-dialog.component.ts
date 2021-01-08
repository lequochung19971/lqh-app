import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../shared/services/dialog.service';
import { BaseComponent } from '../../../../core/components/base-component/base.component';

@Component({
  selector: 'lqh-employee-form-dialog',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.scss']
})
export class EmployeeFormDialogComponent extends BaseComponent implements OnInit {

  constructor(
    protected dialogService: DialogService,
  ) { 
    super();
  }

  ngOnInit(): void {
  }
}
