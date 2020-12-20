import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NavigationName } from '../../../core/enums/navigation-names.enum';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'lqh-shell-header',
  templateUrl: './lqh-shell-header.component.html',
  styleUrls: ['./lqh-shell-header.component.scss']
})
export class LqhShellHeaderComponent implements OnInit {
  breadcrumb: NavigationName;
  currentDateTime: string;
  constructor(protected navigationService: NavigationService) { }

  ngOnInit(): void {
    this.breadcrumb = this.navigationService.getCurrentNavigationName();
    this.currentDateTime = dayjs(new Date()).format('hh:mm A, DD MMMM YYYY');
  }

}
