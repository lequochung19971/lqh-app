import { Component, Input, Optional, Self, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DataSourceComponent } from '@core/components/data-source/data-source.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lqh-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent extends DataSourceComponent implements OnInit {
  @Input() required = false;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() panelClass: string;
  @Input() multiple = false;
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected translateService: TranslateService
  ) { 
    super(ngControl, translateService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.value) {
      this.updateView(this.value);
    }
  }

  writeValue(value: any): void {
    super.writeValue(this.getValue(value));
  }

  changeSelection(value?: any): void {
    this.writeValue(value);
  }
}
