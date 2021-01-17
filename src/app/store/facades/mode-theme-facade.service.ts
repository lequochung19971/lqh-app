import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseFacadeService } from '@core/services/base-facade.service';
import { LocatorFacadeService } from '@core/services/locator-facade.service';
import { ModeThemeActionReducer } from '../reducers/mode-theme.reducer';
import { initialState, ModeThemeState } from '../states/mode-theme.state';
import { ModeTheme } from '@core/enums/mode-theme.enum';
import { ModeThemeActionType } from '../actions/mode-theme.action';
import { FacadeConfig } from '@core/interfaces-abstracts/facade-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ModeThemeFacadeService extends BaseFacadeService<ModeThemeState> {
  get isLightModeObs(): Observable<boolean> {
    return this.select(state => state.isLightMode);
  }

  get isDarkModeObs(): Observable<boolean> {
    return this.select(state => state.isDarkMode);
  }

  constructor(protected lfs: LocatorFacadeService) {
    super(
      { initialState, actionReducer: new ModeThemeActionReducer() } as FacadeConfig,
      lfs
    );
  }

  autoChangeMode(): void {
    if (!this.stateValue.isAutoChangeMode) { return; }
    
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
    
    if (this.stateValue.isAutoChangeMode) {
      this.invokeAction(ModeThemeActionType.AUTO, false);
    }
  }

  updateModeTheme(mode: ModeTheme): void {
    this.invokeAction(ModeThemeActionType.DARK_MODE, mode === ModeTheme.dark);
    this.invokeAction(ModeThemeActionType.LIGHT_MODE, mode === ModeTheme.light);
  }
}
