import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG_TOKEN, NAVIGATION_CONFIG_TOKEN } from '@core/consts/injection-tokens.const';
import { navigationConfig } from '@shared/configs/navigation-config';
import { appConfigs } from './configs/app-config';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [],
  providers: [
    {
      provide: NAVIGATION_CONFIG_TOKEN, useValue: navigationConfig
    },
    {
      provide: APP_CONFIG_TOKEN, useValue: appConfigs
    }
  ]
})
export class CoreModule {}
