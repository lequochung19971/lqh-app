import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentConfig } from '../../../interfaces/builder-config.interface';
import { ComponentBuilderService } from '../../../services/component-builder.service';

@Component({
  selector: 'lqh-col-layout',
  templateUrl: './col-layout.component.html',
  styleUrls: ['./col-layout.component.scss']
})
export class ColLayoutComponent implements OnInit {
  @ViewChild('dynamicCol', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() config: ComponentConfig;

  constructor(protected builder: ComponentBuilderService) { }

  ngOnInit(): void {
    this.renderColumn();
  }

  renderColumn(): void {
    if (this.config) {
      const currentType = this.builder.getCurrentComponent(this.config.type);
      if (!currentType) {
        console.error(`Component - ${this.config.type} is not mapped`);
      }

      this.builder.renderDynamicComponent(currentType.type, this.viewContainerRef);
    }
  }

}
