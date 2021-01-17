import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base-component/base.component';

@Component({
  selector: 'lqh-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
