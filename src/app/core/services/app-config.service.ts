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

  getBaseUrl(): string {
    return this.appConfigs.API.baseUrl;
  }

  getEmployeeUrl(): string {
    return this.appConfigs.API.employeeUrl;
  }

  getLoginUrl(): string {
    return this.appConfigs.API.loginUrl;
  }

  getRefreshTokenUrl(): string {
    return this.appConfigs.API.refreshTokenUrl;
  }
}
