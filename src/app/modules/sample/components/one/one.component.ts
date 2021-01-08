import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';

@Component({
  selector: 'lqh-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
