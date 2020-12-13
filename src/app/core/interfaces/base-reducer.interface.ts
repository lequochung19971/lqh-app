import { BaseAction } from './base-action.interface';
import { BaseState } from './base-state.interface';

export interface BaseReducer {
  reduce(state: BaseState, action: BaseAction): any;
}