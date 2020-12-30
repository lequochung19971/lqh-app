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
  private _isDarkMode: boolean = true;
  private _isLightMode: boolean = false;
  private _isAutoChangeMode: boolean = true;

  constructor() { }

  get isLightModeObs(): Observable<boolean> {
    return this.isLightMode$;
  }

  get isDarkModeObs(): Observable<boolean> {
    return this.isDarkMode$;
  }

  get isDarkMode(): boolean {
    return this._isDarkMode;
  }

  get isLightMode(): boolean {
    return this._isLightMode;
  }

  get isAutoChangeMode(): boolean {
    return this._isAutoChangeMode;
  }

  set isAutoChangeMode(bool: boolean) {
    this._isAutoChangeMode = bool;
  }

  autoChangeMode(): void {
    if (!this._isAutoChangeMode) { return; }
    
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour > 18 && currentHour < 5) {
      this.updateModeTheme(ModeTheme.dark)
    } else {
      this.updateModeTheme(ModeTheme.light)
    }
  }

  setModeTheme(mode: ModeTheme): void {
    this.updateModeTheme(mode);
    this._isAutoChangeMode = false;
  }

  updateModeTheme(mode: ModeTheme): void {
    this.isDarkModeSub.next(this._isDarkMode = mode === ModeTheme.dark);
    this.isLightModeSub.next(this._isLightMode = mode === ModeTheme.light);
  }
}
