import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { EmployeeModel } from '@core/models/employee.model';
import { EmployeeFormDialogComponent } from '@modules/employee/dialogs/employee-form-dialog/employee-form-dialog.component';
import { DialogService } from '@shared/services/dialog.service';
import { EmployeeFacadeService } from 'app/store/facades/employee-facade.service';
import { EventEmitter } from 'events';
import { merge, Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'lqh-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
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
  ];

  dataSource$: Observable<EmployeeModel[]>;

  @Output() tempEvent: EventEmitter;
  constructor(
    protected dialogService: DialogService,
    protected employeeFacadeService: EmployeeFacadeService 
  ) { }

  ngOnInit(): void {
    this.selection.changed.subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewInit(): void {
    this.setTableData();
  }

  // edit() {
  // }

  // delete() {
  // }

  masterToggle(): void {
    this.areAllSelected() ? this.clearAllSelections() : this.selectAllSelections();
  }

  isSelected(row: any): boolean {
    return this.selection.isSelected(row);
  }

  areAllSelected(): boolean {
    const { length: numSelected } = this.selection.selected;
    const { length: numRows } = this.dataSource;
    return numSelected === numRows;
  }

  toggleSelection(row): void {
    this.selection.toggle(row);
  }

  clearAllSelections(): void {
    this.selection.clear();
  }

  selectAllSelections(): void {
    this.dataSource.forEach(row => this.selection.select(row));
  }

  createEmployee(): void {
    this.openDialogForm('Create Employee');
  }

  openDialogForm(title: string): void {
    const dialogConfig: DialogConfig = {
      title,
      component: EmployeeFormDialogComponent,
      rightSide: true
    };

    this.dialogService.openDialogFullPage(dialogConfig);
  }

  setTableData(): void {
    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      tap(() => {
        const params = {
          sort: this.sort.active || '',
          order: this.sort.direction || '',
          page: this.paginator.pageIndex + 1,
          limit: this.paginator.pageSize
        };

        this.employeeFacadeService.updateDataTable(params);
      })
    ).subscribe();
  }
}
