import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BaseAction } from '../interfaces-abstracts/base-action.interface';
import { BaseReducer, ActionReducer } from '../interfaces-abstracts/base-reducer.interface';
import { FacadeConfig } from '../interfaces-abstracts/facade-config.interface';
import { LocatorFacadeService } from './locator-facade.service';
import { BaseState } from '../interfaces-abstracts/base-state.abstract';
import * as logger from '../../shared/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFacadeService<TState extends BaseState> {
  private _state: TState;
  private _storeSubject: BehaviorSubject<TState>;
  private _state$: Observable<TState>;  
  // private _childStates$: Observable<TState>[];
  // private _stateKeys: string[];

  private _actionSubject: Subject<BaseAction>;
  private _action$: Observable<BaseAction>;

  private _reducerSubject: Subject<BaseReducer>;
  private _reducer$: Observable<BaseReducer>;
  private _actionReducer: ActionReducer;

  constructor(
    protected facadeConfig: FacadeConfig,
    protected lfs: LocatorFacadeService
  ) { 
    this.initState(facadeConfig.initialState);
    this.initReducer(facadeConfig.actionReducer);
    this.initAction();
    // this.generateChildStates();
  }

  get stateValue(): TState {
    return this._state;
  }

  private initState(state: TState) {
    this._state = state;
    this._storeSubject = new BehaviorSubject<TState>(this._state);
    this._state$ = this._storeSubject.asObservable();
  }

  private initAction(): void {
    this._actionSubject = new Subject<BaseAction>();
    this._action$ = this._actionSubject.asObservable();

    this._action$.pipe(
      distinctUntilChanged()
    ).subscribe((action: BaseAction) => {
      if (this.checkAction(action)) {
        this._reducerSubject.next({state: this._state, action});
      }
    })
  }

  private initReducer(reducer: ActionReducer): void {
    this._actionReducer = reducer;
    this._reducerSubject = new Subject();
    this._reducer$ = this._reducerSubject.asObservable();

    this._reducer$.pipe(
      distinctUntilChanged()
    ).subscribe(({action, state}: BaseReducer) => {
      this.FacadeLogging(action);
      this.dispatch(this._actionReducer.reduce({state, action}));
    })
  }
  
  public stateChange(): Observable<TState> {
    return this._state$.pipe(
      distinctUntilChanged(),
      map(state => {
        return state;
      })
    );
  }

  // private generateChildStates(): void {
  //   this._childStates$ = this._childStates$ || []; 
  //   this._stateKeys = this._stateKeys || [];
  //   Object.keys(this._state).forEach(key => {
  //     const observer = this.select(key);
  //     this._stateKeys.push(key);
  //     this._childStates$.push(observer);
  //   })
  // }

  // public stateInstanceChange(): Observable<TState> {
  //   return combineLatest(this._childStates$).pipe(
  //     map((_) => {
  //       return this._state;
  //     })
  //   )
  // }

  private dispatch(state: TState): void {
    this._storeSubject.next(this._state = state);
  }

  protected invokeAction(type: string, payload: any): void {
    const action = this.lfs.getAction(type, payload);
    this._actionSubject.next(action);
  }

  protected select(stateFunction: (state: TState) => any): Observable<null | TState | any> {
    return this._state$.pipe(
      map(stateFunction)
    );
  }

  // private hasStateProperty(property: string): boolean {
  //   const findedKey = Object.keys(this._state).find(key => key === property) 
  //   if (!findedKey) {
  //     logger.error(`Property (${property}) doesn't exist in current state`);
  //     return false;
  //   }

  //   return true;
  // }
  
  private checkAction(action: BaseAction): boolean {
    if (action === undefined || action === null) {
      logger.error(`Actions must be objects`);
      return false;
    }
    
    if (action.type === undefined || action.type === null) {
      logger.error(`Actions must have type property`);
      return false;
    }

    return true;
  }

  private FacadeLogging(action: BaseAction) {
    logger.log('-------------------------------------------');
    logger.log('+ Action Type:', action.type);
    logger.log('+ Action payload:', action.payload);
    logger.log('-------------------------------------------');
  }
}
