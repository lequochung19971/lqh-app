import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BuilderConfig } from '../../interfaces/builder-config.interface';
import { ComponentBuilderService } from '../../services/component-builder.service';
import { RowLayoutComponent } from '../grid-layout/row-layout/row-layout.component';

@Component({
  selector: 'lqh-component-builder',
  templateUrl: './component-builder.component.html',
})
export class ComponentBuilderComponent implements OnInit {
  @ViewChild('dynamicForm', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() builderConfig: BuilderConfig;
  @Input() builderConfigName: string;

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

    this.builder.renderDynamicComponent(RowLayoutComponent, this.viewContainerRef, params)
  }

  loadBuilderConfig(configName: string): BuilderConfig {
    return this.builder.getCurrentBuilderConfig(configName);
  }

}
