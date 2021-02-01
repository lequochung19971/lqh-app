import { ActionReducer } from '../../core/interfaces-abstracts/base-reducer.interface';
import { EmployeeAction, EmployeeActionType } from '../actions/employee.action';
import { EmployeeState } from '../states/employee.state';

export class EmployeeActionReducer implements ActionReducer {
  reduce({ state, action }: { state: EmployeeState; action: EmployeeAction }): EmployeeState {
    switch (action.type) {
      case EmployeeActionType.FETCH_EMPLOYEES_DATA_TABLE: {
        return {
          ...state,
          tableData: action.payload.employees,
          totalEmployees: action.payload.totalEmployees,
        } as EmployeeState;
      }

      default: {
        return state;
      }
    }
  }
}
