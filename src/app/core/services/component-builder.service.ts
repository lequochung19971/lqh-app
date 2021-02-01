import { ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef } from '@angular/core';
import { BUILDER_CONFIG_TOKEN, COMPONENT_TYPE_CONFIG_TOKEN } from '../consts/injection-tokens.const';
import { TypeConfig } from '../interfaces-abstracts/type-config.interface';
import { TypeConfigService } from './type-config.service';
import { BuilderConfig } from '../interfaces-abstracts/builder-config.interface';
@Injectable({
  providedIn: 'root'
})
export class ComponentBuilderService extends TypeConfigService {

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver,
    @Inject(COMPONENT_TYPE_CONFIG_TOKEN) public allComponents: [TypeConfig[]],
    @Inject(BUILDER_CONFIG_TOKEN) public allBuilderConfig: [TypeConfig[]]
  ) { 
    super();
  }

  getCurrentComponent(type: string): any {
    const currentComponentTypeConfig = this.getTypeConfig(type, this.allComponents);
    return Object.assign({}, currentComponentTypeConfig.type);
  }

  getCurrentBuilderConfig(type: string): BuilderConfig {
    const builderConfigTypeConfig = this.getTypeConfig(type, this.allBuilderConfig).type;
    return JSON.parse(builderConfigTypeConfig);
  }

  renderDynamicComponent<TComponent>(component: Type<TComponent>, viewContainerRef: ViewContainerRef, params?: any): TComponent {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const dynamicComponentInstance = componentRef.instance as TComponent;
    
    if (params) {
      Object.keys(params).forEach(key => {
        dynamicComponentInstance[key] = params[key];
      });
    }

    return dynamicComponentInstance;
  }
}
