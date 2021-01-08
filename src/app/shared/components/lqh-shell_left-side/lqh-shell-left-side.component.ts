import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakPointService } from '../../services/break-point.service';
import { NavigationConfig } from '../../../core/interfaces-abstracts/navigation-config.interface';
import { NavigationService } from '../../services/navigation.service';
import { ModeThemeService } from '../../services/mode-theme.service';

@Component({
  selector: 'lqh-shell-left-side',
  templateUrl: './lqh-shell-left-side.component.html',
  styleUrls: ['./lqh-shell-left-side.component.scss'],
})
export class LqhShellLeftSideComponent implements OnInit {
  isTablet$: Observable<boolean> = this.breakPointService.isTablet$;
  navList: NavigationConfig[] = this.navigationService.navigationItems;
  isDarkMode$: Observable<boolean> = this.modeThemeService.isDarkModeObs;
  isLightMode$: Observable<boolean> = this.modeThemeService.isLightModeObs;

  constructor(
    protected breakPointService: BreakPointService,
    protected navigationService: NavigationService,
    protected modeThemeService: ModeThemeService
  ) {}

  ngOnInit(): void {
  }
}
