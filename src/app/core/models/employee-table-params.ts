import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export class EmployeeTableParams {
  searchKey: string;
  paginator: MatPaginator;
  sort: MatSort;
}