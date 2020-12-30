import { TypeConfig } from '../../core/interfaces-abstracts/type-config.interface';
import { navigationConfig } from './navigation-config';

export const allSharedJsonObjectConfigs: TypeConfig[] = [
  {
    name: 'navigationConfig',
    type: JSON.stringify(navigationConfig)
  }
]