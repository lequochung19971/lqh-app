import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavigationService } from '@shared/services/navigation.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    protected authService: AuthService, 
    protected navigationService: NavigationService 
  ) { }
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.navigationService.navigateTo(['/dashboard']);
    }

    return !this.authService.isLoggedIn();
  }
}
