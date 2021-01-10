import { Injectable } from '@angular/core';
import { BaseFacadeService } from '../../core/services/base-facade.service';
import { initialState, SampleState } from '../states/sample.state';
import { LocatorFacadeService } from '../../core/services/locator-facade.service';
import { SampleActionType } from '../actions/sample.action';
import { SampleActionReducer } from '../reducers/sample.reducer';
import { FacadeConfig } from '../../core/interfaces-abstracts/facade-config.interface';

@Injectable({
  providedIn: 'root',
})
export class SampleFadadeService extends BaseFacadeService<SampleState> {
  get sampleData() {
    return this.select(state => state.sampleData);
  }
  get tempValue() {
    return this.select(state => state.tempValue);
  }

  constructor(protected lfs: LocatorFacadeService) {
    super(
      { initialState, actionReducer: new SampleActionReducer() } as FacadeConfig,
      lfs
    );
  }

  updateSampleData(value: any) {
    this.invokeAction(SampleActionType.GET_SAMPLE, value);
  }

  updateTempValue(value: any) {
    this.invokeAction(SampleActionType.POST_SAMPLE, value);
  }
}
