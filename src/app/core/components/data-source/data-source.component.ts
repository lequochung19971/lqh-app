import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DatasourceMetadata } from '@core/interfaces-abstracts/data-source-metadata.interface';
import { TranslateService } from '@ngx-translate/core';
import { BaseControl } from '../base-control/base-control.component';

@Directive()
export abstract class DataSourceComponent extends BaseControl {
  @Input() dataSource: any;
  @Input() dataSourceMetadata: DatasourceMetadata;
  @Input() label: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected translateService: TranslateService
  ) { 
    super(ngControl);
  }

  getDisplay(value: any): string {
    if (this.dataSourceMetadata?.display) {
      return this.translateService.instant(value[this.dataSourceMetadata.display]) ?? value;
    }

    return value;
  }

  getValue(value: any): any {
    if (this.dataSourceMetadata?.value) {
      return value[this.dataSourceMetadata.value] ?? value;
    }
    return value;
  }
}
