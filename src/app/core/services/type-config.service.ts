import { Injectable } from '@angular/core';
import { TypeConfig } from '../interfaces-abstracts/type-config.interface';

@Injectable({
  providedIn: 'root'
})
export abstract class TypeConfigService {

  constructor() { }

  getAllTypeConfigs(config: [TypeConfig[]]): TypeConfig[] {
    return [].concat(...config);
  }

  getTypeConfig(type: string, typeConfigs:[TypeConfig[]]): TypeConfig {
    const typeConfig = this.getAllTypeConfigs(typeConfigs).filter(typeConf => typeConf.name === type);
    if (!typeConfig.length) {
      console.error(`Current Type Config - ${type} is not mapped!`);
    } 

    if (typeConfig.length  > 1) {
      console.error(`Duplicate Type Config: ${type}`)
    }

    return typeConfig[0];
  }
}
