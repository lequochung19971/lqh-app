import { Injectable } from '@angular/core';
import { JsonObjectService } from '../../core/services/json-object.service';
import { NavigationConfig } from '../../core/interfaces/navigation-config.interface';
import { NavigationName } from 'src/app/core/enums/navigation-names.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationId } from '../../core/enums/navigation-ids.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _navigationItems: NavigationConfig[] = this.jsonObjectService.getJsonObjectConfig<NavigationConfig[]>('navigationConfig');
  constructor(protected jsonObjectService: JsonObjectService, protected router: Router, protected activatedRoute: ActivatedRoute) { 
  }

  get navigationItems(): NavigationConfig[] {
    return this._navigationItems;
  }

  get currnetNavigationUrl(): string {
    return this.router.url
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
}
