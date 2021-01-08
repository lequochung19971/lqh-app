import { Component, Input, OnInit } from '@angular/core';
import { BuilderConfig, ComponentConfig } from '../../interfaces-abstracts/builder-config.interface';

@Component({
  selector: 'lqh-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export abstract class BaseComponent implements OnInit {
  @Input() builderConfig: BuilderConfig;
  @Input() componentConfig: ComponentConfig;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.builderConfig);
  }

}
