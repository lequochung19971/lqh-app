import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  protected breadcrumb$: any;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router) {
    this.initBreadcrumb();
  }

  initBreadcrumb() {
    this.breadcrumb$ = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd || event instanceof NavigationStart),
        distinctUntilChanged(),
        map((event) => this.buildBreadcrumb(this.activatedRoute, event))
      )
      .subscribe();
  }

  buildBreadcrumb(route: ActivatedRoute, _event) {
    console.log(route);
  }
}
