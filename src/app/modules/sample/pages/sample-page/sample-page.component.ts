import { Component, OnInit } from '@angular/core';
import { SampleFadadeService } from '../../../../store/facades/sample-fadade.service';
import { Observable } from 'rxjs';
import { SampleState } from 'src/app/store/states/sample.state';

@Component({
  selector: 'lqh-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  vm$: Observable<SampleState>
  constructor(
    protected sampleFacade: SampleFadadeService
  ) { }

  ngOnInit(): void {
    this.vm$ = this.sampleFacade.viewModel;
    this.vm$.subscribe(value => {
      console.log(value);
    })
  }

  onClick(): void {
    this.sampleFacade.updateSampleData('Le Quoc Hung');
  }

  onOtherClick(): void {
    this.sampleFacade.updateTempValue('Nguyen Thi Hoai Vi');
  }

}
