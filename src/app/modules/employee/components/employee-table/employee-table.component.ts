import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

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
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'inactive'
    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
    {
      fullName: 'Le Quoc Hung',
      email: 'lequochung19971@gmail.com',
      department: 'Admin',
      position: 'Position A',
      phone: '0987654321',
      status: 'active'

    },
  ]
  constructor() { }

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
}
