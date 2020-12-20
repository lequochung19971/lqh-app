import { Component } from '@angular/core';
import { BreakPointService } from '../../services/break-point.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lqh-shell',
  templateUrl: './lqh-shell.component.html',
  styleUrls: ['./lqh-shell.component.scss']
})
export class LqhShellComponent {
  isTablet$: Observable<boolean> = this.breakPointService.isTablet$;
  
  constructor(protected breakPointService: BreakPointService) {}

}
