import { InjectionToken } from '@angular/core';
import { TypeConfig } from '../interfaces-abstracts/type-config.interface';

export const BUILDER_CONFIG_TOKEN = new InjectionToken<TypeConfig>('BUILDER_CONFIG_TOKEN');
export const COMPONENT_TYPE_CONFIG_TOKEN = new InjectionToken<TypeConfig>('COMPONENT_TYPE_CONFIG_TOKEN');
export const JSON_OBJECT_TYPE_CONFIG_TOKEN = new InjectionToken<TypeConfig>('JSON_OBJECT_TYPE_CONFIG_TOKEN');
export const FACADE_CONFIG_TOKEN = new InjectionToken<TypeConfig>('FACADE_CONFIG_TOKEN');
export const FACADE_ACTION_CONFIG_TOKEN = new InjectionToken<TypeConfig>('FACADE_ACTION_CONFIG_TOKEN');
// export const FACADE_REDUCED_CONFIG_TOKEN = new InjectionToken<TypeConfig>('FACADE_REDUCED_CONFIG_TOKEN');
// export const FACADE_STATE_CONFIG_TOKEN = new InjectionToken<TypeConfig>('FACADE_STATE_CONFIG_TOKEN');