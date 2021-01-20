import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN } from '@core/consts/injection-tokens.const';
import { AppConfig } from '@core/interfaces-abstracts/app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(
    @Inject(APP_CONFIG_TOKEN) protected appConfigs: AppConfig,
  ) { }

  getEmployeeUrl(): string {
    return this.appConfigs.API.employeeUrl;
  }
}
