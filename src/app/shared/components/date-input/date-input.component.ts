import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';
import { BaseControl } from 'src/app/core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
  ]
})
export class DateInputComponent extends BaseControl implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  dateFormat: string = 'DD/MM/YYYY';

  constructor(@Optional() @Self() public ngControl: NgControl) { 
    super(ngControl);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  writeValue(val: Dayjs | string): void {
    this.value = typeof val === 'string' ? val : this.convertDateDayJsToDateString(val as Dayjs);
    this.onTouched();
    this.onChanged(val);
  }

  inputChange(value: string) {
    const day = value.length < 10 ? value : this.convertDateStringToDateDayjs(value);
    this.writeValue(day);
  }

  convertDateDayJsToDateString(date: Dayjs): string {
    return date ? date.format(this.dateFormat) : '';
  }

  convertDateStringToDateDayjs(date: string): Dayjs {
    const dateReverse = date.split('/').reverse().join('/');
    return dayjs(dateReverse, {format: this.dateFormat, utc: true})
  }

}
