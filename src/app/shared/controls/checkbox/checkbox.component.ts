import { Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DataSourceComponent } from '@core/components/data-source/data-source.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lqh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends DataSourceComponent {

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected translateService: TranslateService
  ) { 
    super(ngControl, translateService);
  }

}
