import { AppConfig } from '@core/interfaces-abstracts/app-config.interface';

export const appConfigs: AppConfig = {
  API: {
    baseUrl: 'http://localhost:3000',
    employeeUrl: '/employees',
    loginUrl: '/auth/login',
    logoutUrl: '/auth/logout',
    refreshTokenUrl: '/auth/refresh',
  }
};
