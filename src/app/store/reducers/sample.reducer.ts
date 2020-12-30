import { SampleAction, SampleActionType } from '../actions/sample.action';
import { ActionReducer } from '../../core/interfaces-abstracts/base-reducer.interface';
import { SampleState } from '../states/sample.state';

export class SampleActionReducer implements ActionReducer {
  reduce({state, action}: {state: SampleState, action: SampleAction}) {
    switch (action.type) {
      case SampleActionType.GET_SAMPLE: {
        return { ...state, sampleData: action.payload };
      }
  
      case SampleActionType.POST_SAMPLE: {
        return { ...state, tempValue: action.payload };
      }

      default: {
        return state;
      }
    }
  }
}
