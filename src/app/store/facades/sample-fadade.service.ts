import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseFacadeService } from '../../core/services/base-facade.service';
import { initialState, SampleState } from '../states/sample.state';
import { LocatorFacadeService } from '../../core/services/locator-facade.service';
import { SampleActionType } from '../actions/sample.action';
import { SampleReducer } from '../reducers/sample.reducer';
import { FacadeConfig } from '../../core/interfaces/facade-config.interface';

@Injectable({
  providedIn: 'root',
})
export class SampleFadadeService extends BaseFacadeService<SampleState> {
  protected sampleData$ = this.select('sampleData');
  protected tempValue$ = this.select('tempValue');

  protected _viewModel$: Observable<SampleState> = combineLatest([
    this.sampleData$,
    this.tempValue$,
  ]).pipe(
    map(([sampleData, tempValue]) => {
      return new SampleState({ sampleData, tempValue });
    })
  );

  constructor(protected lfs: LocatorFacadeService) {
    super(
      { state: new SampleState(initialState), reducer: new SampleReducer() } as FacadeConfig,
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
