import { BaseState } from '../../core/interfaces/base-state.interface';

export class SampleState implements BaseState {
  sampleData: any;
  tempValue: any;
  
  constructor(props: any) {
    Object.assign(this, props);
  }
}

export const initialState: SampleState = {
  sampleData: '123456789',
  tempValue: '123'
}