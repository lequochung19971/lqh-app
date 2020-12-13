import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FACADE_CONFIG_TOKEN, FACADE_ACTION_CONFIG_TOKEN } from '../core/consts/injection-tokens.const';
import { allFacadeConfig } from './facades';
import { allActionConfig } from './actions/index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: FACADE_CONFIG_TOKEN,
      multi: true,
      useValue: allFacadeConfig
    },
    {
      provide: FACADE_ACTION_CONFIG_TOKEN,
      multi: true,
      useValue: allActionConfig
    }
  ]
})
export class StoreModule { }
