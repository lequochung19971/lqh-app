import { ActionReducer } from '../../core/interfaces-abstracts/base-reducer.interface';
import { SampleState } from '../states/sample.state';
import { EmployeeAction, EmployeeActionType } from '../actions/employee.action';

export class EmployeeActionReducer implements ActionReducer {
  reduce({state, action}: {state: SampleState, action: EmployeeAction}) {
    switch (action.type) {
      case EmployeeActionType.FETCH_EMPLOYEES_DATA_TABLE: {
        return { ...state, sampleData: action.payload };
      }

      default: {
        return state;
      }
    }
  }
}
