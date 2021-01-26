import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BuilderConfig, ComponentConfig } from '@core/interfaces-abstracts/builder-config.interface';
import { ComponentBuilderService } from '@core/services/component-builder.service';

@Component({
  selector: 'lqh-col-layout',
  templateUrl: './col-layout.component.html',
  styleUrls: ['./col-layout.component.scss']
})
export class ColLayoutComponent implements OnInit {
  @ViewChild('dynamicCol', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() componentConfig: ComponentConfig;
  @Input() builderConfig: BuilderConfig;

  constructor(protected builder: ComponentBuilderService) { }

  ngOnInit(): void {
    this.renderColumn();
  }

  componentInstance() {
    return {
      componentConfig: this.componentConfig,
      builderConfig: this.builderConfig
    }
  }

  renderColumn(): void {
    const params = this.componentInstance();
    if (this.componentConfig) {
      const component: any = this.builder.getCurrentComponent(this.componentConfig.type);
      this.builder.renderDynamicComponent(component, this.viewContainerRef, params);
    }
  }

}
