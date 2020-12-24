import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeTheme } from '../../core/enums/mode-theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ModeThemeService {
  private isLightModeSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private isDarkModeSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private isLightMode$: Observable<boolean> = this.isLightModeSub.asObservable();
  private isDarkMode$: Observable<boolean> = this.isDarkModeSub.asObservable();

  get isLightMode(): Observable<boolean> {
    return this.isLightMode$;
  }

  get isDarkMode(): Observable<boolean> {
    return this.isDarkMode$;
  }

  updateModeTheme(mode: string) {
    this.isDarkModeSub.next(mode === ModeTheme.dark);
    this.isLightModeSub.next(mode === ModeTheme.light);
  }

  constructor() { }
}
