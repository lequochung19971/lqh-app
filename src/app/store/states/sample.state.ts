import { BaseState } from '../../core/interfaces-abstracts/base-state.abstract';

export class SampleState extends BaseState {
  sampleData: any;
  tempValue: any;
  
  constructor(props?: any) {
    super(props);
  }
}

export const initialState: SampleState = new SampleState({
  sampleData: '123456789',
  tempValue: [
    1, 2, 4, 6
  ]
})