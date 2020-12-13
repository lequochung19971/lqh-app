import { SampleState } from '../states/sample.state';
import { SampleActionType, SampleAction } from '../actions/sample.action';
import { BaseReducer } from '../../core/interfaces/base-reducer.interface';

export class SampleReducer implements BaseReducer {
  reduce(state: SampleState, action: SampleAction) {
    switch (action.type) {
      case SampleActionType.GET_SAMPLE: {
        return { ...state, sampleData: action.payload };
      }
  
      case SampleActionType.POST_SAMPLE: {
        return { ...state, tempValue: action.payload };
      }
    }
  }
  
}
