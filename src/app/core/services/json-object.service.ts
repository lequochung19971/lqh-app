import { Inject, Injectable } from '@angular/core';
import { TypeConfigService } from './type-config.service';
import { JSON_OBJECT_TYPE_CONFIG_TOKEN } from '../consts/injection-tokens.const';
import { TypeConfig } from '../interfaces-abstracts/type-config.interface';

@Injectable({
  providedIn: 'root',
})
export class JsonObjectService extends TypeConfigService {
  constructor(@Inject(JSON_OBJECT_TYPE_CONFIG_TOKEN) public allObjectJsonConfig: [TypeConfig[]]) {
    super();
  }

  getJsonObjectConfig<T>(type: string): T {
    const currentJsonObject = this.getTypeConfig(type, this.allObjectJsonConfig).type;
    return JSON.parse(currentJsonObject);
  }
}
