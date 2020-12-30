import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base/base.component';

@Component({
  selector: 'lqh-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeePageComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
