import { Departments } from '@core/enums/departments.enum';
import { Positions } from '@core/enums/positions.enum';
import { BaseModel } from './base.model';

export class PositionModel extends BaseModel {
  id: Positions;
  name: string
  departmentId: Departments
}