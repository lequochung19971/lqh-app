import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BuilderConfig, MetadataBuilderConfig } from '../../interfaces-abstracts/builder-config.interface';
import { ComponentBuilderService } from '../../services/component-builder.service';
import { RowLayoutComponent } from '../grid-layout/row-layout/row-layout.component';

@Component({
  selector: 'lqh-component-builder',
  templateUrl: './component-builder.component.html',
})
export class ComponentBuilderComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() builderConfig: BuilderConfig;
  @Input() builderConfigName: string;
  @Input() metadata: MetadataBuilderConfig;

  constructor(protected builder: ComponentBuilderService) { }

  ngOnInit(): void {
    this.renderComponent();
  }

  renderComponent(): void {
    this.viewContainerRef.clear();

    if (!this.builderConfigName && !this.builderConfig) {
      console.error('Builder Config does not exist!');
      return;
    }

    if (this.builderConfigName) {
      this.builderConfig = this.loadBuilderConfig(this.builderConfigName);
    }
  
    const params = {
      builderConfig: this.builderConfig
    }

    if (this.metadata) {
      this.builderConfig.metadata = {...this.builderConfig.metadata, ...this.metadata };
    }

    this.builder.renderDynamicComponent(RowLayoutComponent, this.viewContainerRef, params)
  }

  loadBuilderConfig(configName: string): BuilderConfig {
    return this.builder.getCurrentBuilderConfig(configName);
  }

}
