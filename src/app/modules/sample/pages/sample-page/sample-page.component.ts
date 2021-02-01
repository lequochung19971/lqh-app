import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleFadadeService } from '../../../../store/facades/sample-fadade.service';
import { SampleState } from '../../../../store/states/sample.state';
import { ProxyService } from '../../../../shared/services/proxy.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lqh-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamplePageComponent implements OnInit {
  constructor(
    protected proxy: ProxyService,
    protected http: HttpClient,
    protected sampleFacade: SampleFadadeService,
  ) { }
  vm$: Observable<SampleState>;
  sampleData$: Observable<any>;
  tempValue$: Observable<any>;
  temp: string;
  temp2: string;
  vm: SampleState;

  imgSrc: string;

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

  onFileUploaded(event): void {
    const uploadedFile = event.target.files;
    if (uploadedFile && uploadedFile.length > 0) {
      if (uploadedFile.length === 1) {
        this.uploadOnlyOneImage(uploadedFile[0]);
      }
    }
  }

  uploadOnlyOneImage(file): void {
    const formData = new FormData();
    formData.append('image', file, file.name);
    this.proxy.post('/uploadFiles', formData).subscribe(res => {
      console.log(res);
    });
  }

  showPreviewImage(file): void {
    const reader = new FileReader();
    reader.onload = (e: any) => (this.imgSrc = e.target.result);
    reader.readAsDataURL(file);
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
