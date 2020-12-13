import { TypeConfig } from '../../core/interfaces/type-config.interface';
import { GetSample, PostSample, SampleActionType } from './sample.action';

export const allActionConfig: TypeConfig[] = [
  {
    name: SampleActionType.GET_SAMPLE,
    type: GetSample
  },
  {
    name: SampleActionType.POST_SAMPLE,
    type: PostSample
  }
]