import { ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef } from '@angular/core';
import { BUILDER_CONFIG_TOKEN, COMPONENT_TYPE_CONFIG_TOKEN } from '../consts/injection-tokens.const';
import { TypeConfig } from '../interfaces/type-config.interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ComponentBuilderService {

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver,
    @Inject(COMPONENT_TYPE_CONFIG_TOKEN) public allComponents: [TypeConfig[]],
    @Inject(BUILDER_CONFIG_TOKEN) public allBuilderConfig: [TypeConfig[]]
  ) { }

  getAllTypeConfigs(config: [TypeConfig[]]): TypeConfig[] {
    return [].concat(...config);
  }

  getTypeConfig(type: string, typeConfigs:[TypeConfig[]]): TypeConfig[] {
    return this.getAllTypeConfigs(typeConfigs).filter(typeConf => typeConf.name === type);
  }

  getCurrentComponent(type: string): TypeConfig {
    const currentComponentType = this.getTypeConfig(type, this.allComponents);
    if (currentComponentType.length > 1) {
      console.error(`Duplicate component type: ${type}`)
    }

    return Object.assign({}, currentComponentType[0]);
  }

  getCurrentBuilderConfig(type: string): TypeConfig {
    const builderConfigType = this.getTypeConfig(type, this.allBuilderConfig);
    if (builderConfigType.length > 1) {
      console.error(`Duplicate builder config type: ${type}`)
    }

    return _.cloneDeep(builderConfigType[0]);
  }

  renderDynamicComponent<TComponent>(component: Type<TComponent>, viewContainerRef: ViewContainerRef, params?: any): TComponent {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const dynamicComponentInstance = <TComponent>componentRef.instance;
    
    if (params) {
      Object.keys(params).forEach(key => {
        dynamicComponentInstance[key] = params[key]
      })
    }

    return dynamicComponentInstance;
  }
}
