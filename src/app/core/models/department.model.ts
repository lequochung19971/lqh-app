import 'reflect-metadata';
import { Departments } from '@core/enums/departments.enum';
import { Expose } from 'class-transformer';
import { BaseModel } from './base.model';

export class DepartmentModel extends BaseModel {
  @Expose()
  id: Departments;
  
  @Expose()
  name: string;

  constructor(props?: DepartmentModel) {
    super(props);
  }
}
