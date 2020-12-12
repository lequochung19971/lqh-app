import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BaseAction } from '../interfaces/base-action.interface';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFacadeService<Tstate> {
  protected _state: Tstate;
  private _storeSubject: BehaviorSubject<Tstate>;
  private _state$: Observable<Tstate>;  
  private _actions: BaseAction[];
  private _actionSubject: Subject<BaseAction>;
  private _action$: Observable<BaseAction>;

  protected abstract _viewModel$: Observable<Tstate>
  protected abstract reduce(action: BaseAction): Tstate;

  constructor(state: Tstate) { 
    this._state = state;
    this._storeSubject = new BehaviorSubject<Tstate>(this._state);
    this._state$ = this._storeSubject.asObservable();
    
    this._actionSubject = new Subject<BaseAction>();
    this._action$ = this._actionSubject.asObservable();
    this._actions = [];

    this.startAction();
  }

  get viewModel(): Observable<Tstate> {
    return this._viewModel$;
  }


  protected createAction(currentAction: BaseAction): BaseAction {
    const index = this._actions.findIndex(act => act.type === currentAction.type);

    if (index === -1) {
      this._actions.push(currentAction);
    } else {
      this._actions[index] = currentAction;
    }

    return currentAction;
  }

  private dispatch(state: Tstate): void {
    this._storeSubject.next(this._state = state);
  }

  protected invokeAction(action: BaseAction): void {
    this._actionSubject.next(action);
  }

  protected select(property: string): Observable<null | Tstate> {
    if (!this.checkExistenceProperty(property)) {
      return of(null);
    }
    
    return this._state$.pipe(
      map((state: Tstate) => state[property]), 
      distinctUntilChanged())
  }

  private startAction(): void {
    this._action$.pipe(
      distinctUntilChanged()
    ).subscribe((action: BaseAction) => {
      if (this.checkAction(action)) {
        this.dispatch(this.reduce(action));
      }
    })
  }

  private checkExistenceProperty(property: string): boolean {
    if (Object.keys(this._state).find(key => key === property)) {
      console.error(`Property (${property}) doesn't exist in current state`);
      return true;
    }

    return false;
  }
  
  private checkAction(action: BaseAction): boolean {
    if (action === undefined || action === null) {
      console.error(`Actoins must be objects`);
      return false;
    } 
    
    if (action.type === undefined || action.type === null) {
      console.error(`Actoins must have type property`);
      return false;
    } 

    const { length: countDuplication } = this._actions.filter(action => action.type === action.type);
    if (countDuplication >= 2) {
      console.error(`Duplicate Action type: ${action}`);
      return false;
    }

    return true;
  }
}
