export interface NavigationConfig {
  id: string,
  authorize: boolean,
  routerName: string,
  url: string,
  icon: {
    active: string,
    inActive: string
  }
}