import { BaseAction } from './base-action.interface';
import { BaseState } from './base-state.abstract';

export interface BaseReducer {
  state: BaseState;
  action: BaseAction;
}

export interface ActionReducer {
  reduce({state, action}: BaseReducer): any;
}