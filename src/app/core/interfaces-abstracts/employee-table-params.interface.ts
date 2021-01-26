import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface EmployeeTableParams {
  searchKey: string;
  paginator: MatPaginator;
  sort: MatSort;
}