import { Inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NAVIGATION_CONFIG_TOKEN } from '@core/consts/injection-tokens.const';
import { NavigationId } from '@core/enums/navigation-ids.enum';
import { NavigationName } from '@core/enums/navigation-names.enum';
import { NavigationConfig } from '@core/interfaces-abstracts/navigation-config.interface';
import { JsonObjectService } from '@core/services/json-object.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    @Inject(NAVIGATION_CONFIG_TOKEN) private _navigationItems: NavigationConfig[],
    protected jsonObjectService: JsonObjectService, 
    protected router: Router, 
    protected activatedRoute: ActivatedRoute,
  ) { }

  get navigationItems(): NavigationConfig[] {
    return this._navigationItems;
  }

  get currnetNavigationUrl(): string {
    return this.router.url;
  }

  getNavigationNameById(navId: string): NavigationName {
    return (this._navigationItems || []).find(nav => nav.id === navId)?.routerName as NavigationName;
  }

  getNavigationNameByUrl(url: string): NavigationName {
    return (this._navigationItems || []).find(nav => nav.id === url)?.routerName as NavigationName;
  }

  getCurrentNavigationName(): NavigationName {
    return (this._navigationItems || []).find(nav => nav.url === this.router.url)?.routerName as NavigationName;
  }

  getCurrentNavigationId(): NavigationId {
    return (this._navigationItems || []).find(nav => nav.url === this.router.url)?.id as NavigationId;
  }

  navigateTo(commands: any[], extras?: NavigationExtras): void {
    this.router.navigate(commands, extras);
  }
}
