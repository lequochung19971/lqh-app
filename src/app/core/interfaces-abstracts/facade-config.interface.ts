import { ActionReducer } from './base-reducer.interface';

export interface FacadeConfig {
  initialState: any,
  actionReducer: ActionReducer
}