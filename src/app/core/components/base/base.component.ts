import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lqh-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export abstract class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
