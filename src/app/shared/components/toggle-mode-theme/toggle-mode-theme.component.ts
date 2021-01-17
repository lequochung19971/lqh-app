import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { ModeTheme } from '@core/enums/mode-theme.enum';
import { ModeThemeFacadeService } from 'app/store/facades/mode-theme-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lqh-toggle-mode-theme',
  templateUrl: './toggle-mode-theme.component.html',
  styleUrls: ['./toggle-mode-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleModeThemeComponent implements OnInit {
  currentTheme: ModeTheme;
  isClicked: boolean = true;
  isLightMode$: Observable<boolean> = this.modeThemeFacadeService.isLightModeObs;
  isDarkMode$: Observable<boolean> = this.modeThemeFacadeService.isDarkModeObs;

  constructor(
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    protected modeThemeFacadeService: ModeThemeFacadeService
  ) { }
  
  ngOnInit(): void {
    this.currentTheme = (localStorage.getItem('mode-theme') as ModeTheme) || ModeTheme.light
    this.updateMode();
  }

  switchMode() {
    this.isClicked = !this.isClicked;
    this.currentTheme = this.isClicked ? ModeTheme.dark : ModeTheme.light;
    this.updateMode();
  }

  updateMode() {
    localStorage.setItem('mode-theme', this.currentTheme);
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    this.modeThemeFacadeService.setModeTheme(this.currentTheme)
  }
}
