import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(
    protected authService: AuthService, 
    protected navigationService: NavigationService 
  ) { }

  canActivate(): boolean {
    return this.canLoad();
  }

  canLoad(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.navigationService.navigateTo(['/login']);
    }

    return this.authService.isLoggedIn();
  }
}
