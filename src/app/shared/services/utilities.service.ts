import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  calculateAgeByDOB(date: Dayjs | string) {
    if (typeof date === 'string') {
      return '';
    }

    if (typeof date === 'object') {
      const now = dayjs();
      return `${now.diff(date, 'year')}`;
    }
  }
}
