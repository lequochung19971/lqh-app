import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lqh-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
