import { TypeConfig } from '../../../core/interfaces-abstracts/type-config.interface';
import { employeeFormDialogConfig } from './employee-form-dialog.config';
import { employeePageConfig } from './employee-page.config';
export const allEmployeeBuilderConfigs: TypeConfig[] = [
  {
    name: 'employeePage',
    type: JSON.stringify(employeePageConfig)
  },
  {
    name: 'employeeFormDialog',
    type: JSON.stringify(employeeFormDialogConfig)
  }
]