import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BaseAction } from '../interfaces/base-action.interface';
import { BaseReducer } from '../interfaces/base-reducer.interface';
import { FacadeConfig } from '../interfaces/facade-config.interface';
import { LocatorFacadeService } from './locator-facade.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFacadeService<TState> {
  protected _state: TState;
  private _storeSubject: BehaviorSubject<TState>;
  private _state$: Observable<TState>;  

  private _actionSubject: Subject<BaseAction>;
  private _action$: Observable<BaseAction>;

  private _reducerSubject: Subject<BaseAction>;
  private _reducer$: Observable<BaseAction>;
  private _actionReducer: BaseReducer;

  protected abstract _viewModel$: Observable<TState>

  constructor(
    public config: FacadeConfig,
    protected lfs: LocatorFacadeService
  ) { 
    this.initState(config.state);
    this.initReducer(config.reducer);
    this.initAction();
  }

  get viewModel(): Observable<TState> {
    return this._viewModel$;
  }


  private initState(state: TState) {
    this._state = state;
    this._storeSubject = new BehaviorSubject<TState>(this._state);
    this._state$ = this._storeSubject.asObservable();
  }

  private dispatch(state: TState): void {
    this._storeSubject.next(this._state = state);
  }

  protected invokeAction(type: string, payload: any): void {
    const action = this.lfs.getAction(type, payload);
    this._actionSubject.next(action);
  }

  protected select(property: string): Observable<null | TState> {
    if (!this.hasStateProperty(property)) {
      return of(null);
    }
    
    return this._state$.pipe(
      map((state: TState) => state[property]), 
      distinctUntilChanged())
  }

  private initAction(): void {
    this._actionSubject = new Subject<BaseAction>();
    this._action$ = this._actionSubject.asObservable();

    this._action$.pipe(
      distinctUntilChanged()
    ).subscribe((action: BaseAction) => {
      if (this.checkAction(action)) {
        this._reducerSubject.next(action);
      }
    })
  }

  protected initReducer(reducer: BaseReducer): void {
    this._actionReducer = reducer;
    this._reducerSubject = new Subject();
    this._reducer$ = this._reducerSubject.asObservable();

    this._reducer$.pipe(
      distinctUntilChanged()
    ).subscribe((action: BaseAction) => {
      this.dispatch(this._actionReducer.reduce(this._state, action));
    })
  }

  private hasStateProperty(property: string): boolean {
    const findedKey = Object.keys(this._state).find(key => key === property) 
    if (!findedKey) {
      console.error(`Property (${property}) doesn't exist in current state`);
      return false;
    }

    return true;
  }
  
  private checkAction(action: BaseAction): boolean {
    if (action === undefined || action === null) {
      console.error(`Actions must be objects`);
      return false;
    }
    
    if (action.type === undefined || action.type === null) {
      console.error(`Actions must have type property`);
      return false;
    }

    return true;
  }
}
