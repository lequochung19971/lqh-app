import { TypeConfig } from '../../../core/interfaces/type-config.interface';
import { employeePageConfig } from './employee-page.config';
export const allEmployeeBuilderConfigs: TypeConfig[] = [
  {
    name: 'employeePage',
    type: JSON.stringify(employeePageConfig)
  }
]