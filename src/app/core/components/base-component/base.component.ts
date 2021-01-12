import { Directive, Input, OnInit } from '@angular/core';
import { BuilderConfig, ComponentConfig } from '../../interfaces-abstracts/builder-config.interface';
import { BaseModel } from '../../models/base.model';

@Directive()
export abstract class BaseComponent implements OnInit {
  @Input() builderConfig: BuilderConfig;
  @Input() componentConfig: ComponentConfig;
  @Input() viewModel: BaseModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.builderConfig);
  }

}
