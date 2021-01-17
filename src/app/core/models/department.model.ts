import { Departments } from '@core/enums/departments.enum';
import { BaseModel } from './base.model';

export class DepartmentModel extends BaseModel {
  id: Departments;
  name: string
}