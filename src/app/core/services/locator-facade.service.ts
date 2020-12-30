import { Inject, Injectable, Injector } from '@angular/core';
import { FACADE_CONFIG_TOKEN, FACADE_ACTION_CONFIG_TOKEN } from '../consts/injection-tokens.const';
import { TypeConfig } from '../interfaces-abstracts/type-config.interface';
import { TypeConfigService } from './type-config.service';
import { BaseAction } from '../interfaces-abstracts/base-action.interface';

@Injectable({
  providedIn: 'root'
})
export class LocatorFacadeService extends TypeConfigService {

  constructor(
    protected injector: Injector,
    @Inject(FACADE_CONFIG_TOKEN) public allFacades: [TypeConfig[]],
    @Inject(FACADE_ACTION_CONFIG_TOKEN) public allActions: [TypeConfig[]],
  ) { 
    super();
  }
  
  // getFacade(type: string): void {
  //   const currentFacade = this.getTypeConfig(type, this.allFacades);
  //   this.injector.get(currentFacade.type) 
  // }

  getAction(type: string, payload: any): BaseAction {
    const currentAction = this.getTypeConfig(type, this.allActions).type;
    return new currentAction(payload);
  }
}
