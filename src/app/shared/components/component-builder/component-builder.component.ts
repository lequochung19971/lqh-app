import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BuilderConfig, MetadataBuilderConfig } from '@core/interfaces-abstracts/builder-config.interface';
import { ComponentBuilderService } from '@core/services/component-builder.service';
import { RowLayoutComponent } from '../grid-layout/row-layout/row-layout.component';
import { BaseModel } from '../../../core/models/base.model';

@Component({
  selector: 'lqh-component-builder',
  templateUrl: './component-builder.component.html',
})
export class ComponentBuilderComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() builderConfig: BuilderConfig;
  @Input() builderConfigName: string;
  @Input() metadata: MetadataBuilderConfig;
  @Input() viewModel: BaseModel;
  @Input() parentViewModel: BaseModel;

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
      builderConfig: this.builderConfig,
      viewModel: this.viewModel,
      parentViewMode: this.parentViewModel
    };

    if (this.metadata) {
      this.builderConfig.metadata = {...this.builderConfig.metadata, ...this.metadata };
    }

    this.builder.renderDynamicComponent(RowLayoutComponent, this.viewContainerRef, params);
  }

  loadBuilderConfig(configName: string): BuilderConfig {
    return this.builder.getCurrentBuilderConfig(configName);
  }

}
