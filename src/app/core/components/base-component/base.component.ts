import { AfterViewInit, ChangeDetectorRef, Directive, Input, OnInit } from '@angular/core';
import { BuilderConfig, ComponentConfig, MetadataBuilderConfig } from '../../interfaces-abstracts/builder-config.interface';
import { BaseModel } from '../../models/base.model';
import * as _ from 'lodash-es';

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
      this.setBindingModel(this.parentViewModel, this.path, this.viewModel);
    }
  }

  protected getMetadataBuilderConfig(): MetadataBuilderConfig {
    return this.builderConfig.metadata;
  }

  protected setBindingModel(modelData: any, path: string | null, value: any): void {
    _.set(modelData, path, value);
  }

  /**
   * To resolve Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
   * @param changeDetectorRef - changeDetectorRef
   */
  protected forcingChangeDetection(changeDetectorRef: ChangeDetectorRef): void {
    changeDetectorRef.detectChanges();
  }
}
