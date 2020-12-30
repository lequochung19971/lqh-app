import { TypeConfig } from '../../../core/interfaces-abstracts/type-config.interface';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
export const allEmployeeComponents = [
  EmployeeTableComponent,
  EmployeeFormComponent
]

export const allEmployeeComponentConfigs: TypeConfig[] = [
  {
    name: 'employeeTable',
    type: EmployeeTableComponent
  },
  {
    name: 'employeeForm',
    type: EmployeeFormComponent
  }
]