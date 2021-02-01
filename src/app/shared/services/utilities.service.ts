import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateTimeUtilities } from '@core/interfaces-abstracts/utilities/datetime-utilities.interface';
import { FormUtilities } from '@core/interfaces-abstracts/utilities/form-utilities.interface';
import { RandomUitilities } from '@core/interfaces-abstracts/utilities/random-utilities.interface';
import dayjs, { Dayjs } from 'dayjs';

@Injectable({
  providedIn: 'any'
})
export class UtilitiesService implements DateTimeUtilities, FormUtilities, RandomUitilities {
  dateFormat = 'DD/MM/YYYY';

  constructor() { }

  calculateAgeByDOB(date: Dayjs | string): string {
    if (typeof date === 'string') {
      date = this.convertDateStringToDateDayjs(date, this.dateFormat);
    }

    if (typeof date === 'object') {
      const now = dayjs();
      return `${now.diff(date, 'year')}`;
    }
  }

  convertDateDayJsToDateString(date: Dayjs, format: string): string {
    return date ? date.format(format) : '';
  }

  convertDateStringToDateDayjs(date: string, format: string): Dayjs {
    const dateReverse = date.split('/').reverse().join('/');
    return dayjs(dateReverse, { format, utc: true });
  }

  formGroupHasErrors(group: FormGroup): boolean {
    let hasError = false;

    Object.values(group.controls).forEach((control: FormControl) => {
      if (control.errors || control.invalid) {
        hasError = true;
      }
    });

    return hasError; 
  }

  getRandomByDate(): string {
    return String(new Date().getMilliseconds());
  }

  getRandomStringByLength(length: number): string {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;

  }

}
