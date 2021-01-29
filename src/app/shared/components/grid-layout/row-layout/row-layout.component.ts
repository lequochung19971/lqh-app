import { Component, Input, OnInit } from '@angular/core';
import { BuilderConfig, ComponentConfig, LayoutDefinition } from '@core/interfaces-abstracts/builder-config.interface';
import { ComponentBuilderService } from '@core/services/component-builder.service';
import { BaseModel } from '../../../../core/models/base.model';

@Component({
  selector: 'lqh-row-layout',
  templateUrl: './row-layout.component.html',
  styleUrls: ['./row-layout.component.scss']
})
export class RowLayoutComponent implements OnInit {
  @Input() builderConfig: BuilderConfig;
  @Input() viewModel: BaseModel;
  @Input() parentViewModel: BaseModel;
  rowCss: string;
  containerCss: string;
  componentConfigs: ComponentConfig[];
  constructor(protected builder: ComponentBuilderService) {     
  }

  ngOnInit(): void {
    this.rowCss = this.builderConfig?.metadata?.cssClass?.row || '';
    this.containerCss = this.builderConfig?.metadata?.cssClass?.container || '';
    this.componentConfigs = this.builderConfig.components;
  }

  protected getGridColumn(layouts: LayoutDefinition): string {
    let cols = '';

    if (layouts) {
      Object.keys(layouts).forEach(key => {
        const layout = layouts[key];
        if (layout) {
          cols = `${cols} col-${key.slice(-2)}-${layout}`;
        }
      });
    }

    return cols;
  }
}
