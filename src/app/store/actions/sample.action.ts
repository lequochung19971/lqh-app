import { BaseAction } from '../../core/interfaces-abstracts/base-action.interface';
export enum SampleActionType {
  GET_SAMPLE = '@Sample/Get',
  POST_SAMPLE = '@Sample/Post'
}

export class GetSample implements BaseAction {
  readonly type = SampleActionType.GET_SAMPLE;
  constructor(readonly payload: any) {}
}

export class PostSample implements BaseAction {
  readonly type = SampleActionType.POST_SAMPLE;
  constructor(readonly payload: any) {}
}

export type SampleAction = GetSample | PostSample;