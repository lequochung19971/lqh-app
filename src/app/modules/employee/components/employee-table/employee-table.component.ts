import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { EmployeeModel } from '@core/models/employee.model';
import { EmployeeFormDialogComponent } from '@modules/employee/dialogs/employee-form-dialog/employee-form-dialog.component';
import { DialogService } from '@shared/services/dialog.service';
import { EmployeeFacadeService } from 'app/store/facades/employee-facade.service';
import { merge, Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { EmployeeRestService } from '../../services/employee-rest.service';

@Component({
  selector: 'lqh-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    'select',
    'fullName',
    'position',
    'department',
    // 'status',
    'action',
  ];
  selection = new SelectionModel(true, []);
  dataSource: EmployeeModel[];
  $totalEmployees: Observable<number>;

  constructor(
    protected dialogService: DialogService,
    protected employeeFacadeService: EmployeeFacadeService,
    protected employeeRestService: EmployeeRestService
  ) {}

  ngOnInit(): void {
    this.initDataSource();
    this.$totalEmployees = this.employeeFacadeService.select((state) => state.totalEmployees);
  }

  ngAfterViewInit(): void {
    this.setTableData();
  }

  initDataSource(): void {
    this.employeeFacadeService
      .select((state) => state.tableData)
      .subscribe((source) => {
        this.dataSource = source;
      });
  }

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

  toggleSelection(row: EmployeeModel): void {
    this.selection.toggle(row);
  }

  clearAllSelections(): void {
    this.selection.clear();
  }

  selectAllSelections(): void {
    this.dataSource.forEach((row) => this.selection.select(row));
  }

  createEmployee(): void {
    this.openDialogForm({ title: 'Create Employee' });
  }

  editEmployee(row: EmployeeModel): void {
    this.openDialogForm({ title: 'Edit Employee', model: row });
  }

  deleteEmployee(row: EmployeeModel): void {
    console.log(row);
    this.employeeRestService.deleteEmployeeById(row).subscribe(() => {
      this.setTableData();
    });
  }

  openDialogForm({ title, model }: { title?: string; model?: EmployeeModel }): void {
    const dialogConfig: DialogConfig = {
      title,
      rightSide: true,
      component: EmployeeFormDialogComponent,
      componentInstance: {
        viewModel: model || new EmployeeModel(),
      },
    };

    this.dialogService.openDialogFullPage(dialogConfig).afterClosed().subscribe((data) => {
      if (data) {
        this.refreshTable();
      }
    });
  }

  refreshTable(): void {
    this.setTableData();
  }

  setTableData(): void {
    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        startWith({}),
        tap(() => {
          const params = {
            sort: this.sort.active || '',
            order: this.sort.direction || '',
            page: this.paginator.pageIndex + 1,
            limit: this.paginator.pageSize,
          };

          this.employeeFacadeService.updateDataTable(params);
        })
      )
      .subscribe();
  }
}
