import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lqh-sample-input-custom',
  templateUrl: './sample-input-custom.component.html',
  styleUrls: ['./sample-input-custom.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: SampleInputCustomComponent,
      multi: true
    }
  ]
})
export class SampleInputCustomComponent implements ControlValueAccessor {
  value: string;
  disabled: boolean;

  onChanged: (data) => void;
  onTouched: () => void;
  constructor() { }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  changeValue($event) {
    this.onTouched();
    this.onChanged($event.currentTarget.value);
  }

}
