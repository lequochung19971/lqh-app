import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { ModeThemeService } from '../../services/mode-theme.service';
import { Observable } from 'rxjs';
import { ModeTheme } from '../../../core/enums/mode-theme.enum';

@Component({
  selector: 'lqh-toggle-mode-theme',
  templateUrl: './toggle-mode-theme.component.html',
  styleUrls: ['./toggle-mode-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleModeThemeComponent implements OnInit {
  currentTheme: ModeTheme;
  isClicked: boolean = true;
  isLightMode$: Observable<boolean> = this.modeThemeService.isLightModeObs;
  isDarkMode$: Observable<boolean> = this.modeThemeService.isDarkModeObs;

  constructor(
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    protected modeThemeService: ModeThemeService
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
    this.modeThemeService.setModeTheme(this.currentTheme)
  }
}
