export interface AppConfig {
  API?: ApiConfig;
}

export interface ApiConfig {
  baseUrl?: string;
  employeeUrl?: string;
  loginUrl?: string;
  logoutUrl?: string;
  refreshTokenUrl?: string;
  
}
