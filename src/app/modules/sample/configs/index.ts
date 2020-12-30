import { TypeConfig } from '../../../core/interfaces-abstracts/type-config.interface';
import { samplePageConfig } from './sample-page.config';

export const allSampleBuilderConfig: TypeConfig[] = [
  {
    name: 'samplePage',
    type: JSON.stringify(samplePageConfig)
  }
]