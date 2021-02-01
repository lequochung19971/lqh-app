import { AfterViewInit, ChangeDetectorRef, Directive, Input, OnInit } from '@angular/core';
import { BuilderConfig, ComponentConfig, MetadataBuilderConfig } from '../../interfaces-abstracts/builder-config.interface';
import { BaseModel } from '../../models/base.model';
import { set } from 'lodash';

@Directive()
export abstract class BaseComponent implements OnInit, AfterViewInit {
  @Input() builderConfig: BuilderConfig;
  @Input() componentConfig: ComponentConfig;
  @Input() viewModel: BaseModel;
  @Input() parentViewModel: BaseModel;
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
    this.onInitViewModel();
  }

  ngAfterViewInit(): void {
  }

  protected onInitViewModel(): void {
    if (this.path) {
      this.setBindingData(this.parentViewModel, this.path, this.viewModel);
    }
  }

  protected getMetadataBuilderConfig(): MetadataBuilderConfig {
    return this.builderConfig.metadata;
  }

  protected setBindingData(modelData: any, path: string | null, value: any): void {
    set(modelData, path, value);
  }

  /**
   * To resolve Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
   */
  protected forcingChangeDetection(changeDetectorRef: ChangeDetectorRef): void {
    changeDetectorRef.detectChanges();
  }
}
