import { TypeConfig } from '../../../core/interfaces/type-config.interface';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
export const allEmployeeComponents = [
  EmployeeTableComponent
]

export const allEmployeeComponentConfigs: TypeConfig[] = [
  {
    name: 'employeeTable',
    type: EmployeeTableComponent
  }
]