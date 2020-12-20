import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakPointService } from '../../services/break-point.service';
import { NavigationConfig } from '../../../core/interfaces/navigation-config.interface';

@Component({
  selector: 'lqh-shell-left-side',
  templateUrl: './lqh-shell-left-side.component.html',
  styleUrls: ['./lqh-shell-left-side.component.scss']
})
export class LqhShellLeftSideComponent implements OnInit {
  isTablet$: Observable<boolean> = this.breakPointService.isTablet$;

  constructor(protected breakPointService: BreakPointService) {}

  ngOnInit(): void {
  }

  navList: NavigationConfig[] = [
    {
      id: 'dashboard',
      authorize: true,
      routerName: 'Dashboard',
      matIconName: 'dashboard',
      url: '/dashboard',
    },
    {
      id: 'sample',
      authorize: true,
      routerName: 'Sample',
      matIconName: 'dashboard',
      url: '/sample',
    }
  ]
}
