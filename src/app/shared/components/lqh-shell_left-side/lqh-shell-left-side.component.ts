import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakPointService } from '../../services/break-point.service';
import { NavigationConfig } from '../../../core/interfaces/navigation-config.interface';
import { NavigationService } from '../../services/navigation.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lqh-shell-left-side',
  templateUrl: './lqh-shell-left-side.component.html',
  styleUrls: ['./lqh-shell-left-side.component.scss'],
})
export class LqhShellLeftSideComponent implements OnInit {
  isTablet$: Observable<boolean> = this.breakPointService.isTablet$;
  navList: NavigationConfig[] = this.navigationService.navigationItems;
  currentTheme: string = 'theme-light';

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }

  constructor(
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    protected breakPointService: BreakPointService,
    protected navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    // this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }
}
