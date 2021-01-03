import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleFadadeService } from '../../../../store/facades/sample-fadade.service';
import { SampleState } from '../../../../store/states/sample.state';
import * as _ from 'lodash-es';

@Component({
  selector: 'lqh-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamplePageComponent implements OnInit {
  vm$: Observable<SampleState>;
  sampleData$: Observable<any>;
  tempValue$: Observable<any>;
  temp: string;
  temp2: string;
  vm: SampleState;
  constructor(
    protected sampleFacade: SampleFadadeService,
  ) { }

  ngOnInit(): void {
    this.vm$ = this.sampleFacade.stateChange();
    this.vm$.subscribe(value => {
      // console.log(value);
      this.vm = value;
    })

    // this.sampleFacade.changes.subscribe(value => {
    //   console.log(value);
    // })

    this.sampleData$ = this.sampleFacade.sampleData;
    this.tempValue$ = this.sampleFacade.tempValue;
  }

  tempClick() {
    this.temp = '1000000000000';
  }

  tempClick2() {
    this.temp2 = 'Le Quoc Hung'
  }

  onClick(): void {
    this.sampleFacade.updateSampleData('Le Quoc Hung');
  }

  onOtherClick(): void {
    const tempValue = this.vm.tempValue;
    tempValue[0] = 9;
    this.sampleFacade.updateTempValue(tempValue);
  }

  onRefresh(): void {
    this.sampleFacade.updateSampleData('Sample Data');
    this.sampleFacade.updateTempValue('Temp Value');
  }
}
