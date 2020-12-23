import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleFadadeService } from '../../../../store/facades/sample-fadade.service';
import { SampleState } from '../../../../store/states/sample.state';

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

  constructor(
    protected sampleFacade: SampleFadadeService
  ) { }

  ngOnInit(): void {
    // this.vm$ = this.sampleFacade.viewModel;
    // this.vm$.subscribe(value => {
    //   console.log(value);
    // })

    // this.sampleData$ = this.sampleFacade.sampleData;
    // this.tempValue$ = this.sampleFacade.tempValue;
  }

  onClick(): void {
    this.sampleFacade.updateSampleData('Le Quoc Hung');
  }

  onOtherClick(): void {
    this.sampleFacade.updateTempValue('Nguyen Thi Hoai Vi');
  }

  onRefresh(): void {
    this.sampleFacade.updateSampleData('Sample Data');
    this.sampleFacade.updateTempValue('Temp Value');
  }
}
