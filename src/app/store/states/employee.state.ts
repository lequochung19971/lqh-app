import { EmployeeModel } from '@core/models/employee.model';
import { BaseState } from '../../core/interfaces-abstracts/base-state.abstract';

export class EmployeeState extends BaseState {
  tableData: EmployeeModel[];
  totalEmployees: number;
  
  constructor(props?: any) {
    super(props);
  }
}

export const initialState: EmployeeState = new EmployeeState({
  tableData: []
});
