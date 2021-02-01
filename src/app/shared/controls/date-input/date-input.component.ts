import { Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { UtilitiesService } from '../../services/utilities.service';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'lqh-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent extends InputComponent {
  dateFormat = 'DD/MM/YYYY';

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected utilitiesService: UtilitiesService
    ) {
    super(ngControl);
  }

  writeValue(val: Dayjs | string): void {
    if (typeof val !== 'string') {
      val = this.utilitiesService.convertDateDayJsToDateString(val as Dayjs, this.dateFormat);
    }
    super.writeValue(val);
  }
}