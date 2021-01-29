import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DataSourceComponent } from '@core/components/data-source/data-source.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lqh-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent extends DataSourceComponent {
  @Input() required = false;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected translateService: TranslateService
  ) { 
    super(ngControl, translateService);
  }
}
