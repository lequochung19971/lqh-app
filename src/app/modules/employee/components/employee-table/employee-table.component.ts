import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { EmployeeFormDialogComponent } from '@modules/employee/dialogs/employee-form-dialog/employee-form-dialog.component';
import { EmployeeService } from '@modules/employee/services/employee.service';
import { DialogService } from '@shared/services/dialog.service';
import { EmployeeFE } from '../../../../core/models/employee-fe.model';

@Component({
  selector: 'lqh-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'fullName',
    'position',
    'department',
    'status',
    'action'
  ];
  selection = new SelectionModel(true, []);
  dataSource = [
    {
      fullName: '',
      email: '',
      department: '',
      position: '',
      phone: '',
      status: '',
      avatar: ''
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: '',
      email: '',
      department: '',
      position: '',
      phone: '',
      status: '',
      avatar: ''
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active',
      avatar: 'images/unnamed.jpg'
    },
  ]
  constructor(
    protected employeeService: EmployeeService, 
    protected dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.selection.changed.subscribe(data => {
      console.log(data);
    })
  }

  edit() {
  }

  delete() {
  }

  masterToggle() {
    this.areAllSelected() ? this.clearAllSelections() : this.selectAllSelections();
  }

  isSelected(row) {
    return this.selection.isSelected(row);
  }

  areAllSelected() {
    const { length: numSelected } = this.selection.selected;
    const { length: numRows } = this.dataSource;
    return numSelected === numRows;
  }

  toggleSelection(row) {
    this.selection.toggle(row);
  }

  clearAllSelections() {
    this.selection.clear();
  }

  selectAllSelections() {
    this.dataSource.forEach(row => this.selection.select(row))
  }

  createEmployee(): void {
    this.openDialogForm('Create Employee');
  }

  openDialogForm(title: string): void {
    const dialogConfig: DialogConfig = {
      title: title,
      component: EmployeeFormDialogComponent,
      rightSide: true
    }

    this.dialogService.openDialogFullPage(dialogConfig).afterClosed().subscribe((employee: EmployeeFE) => {
      if(employee) {

      }
    });
  }
}
