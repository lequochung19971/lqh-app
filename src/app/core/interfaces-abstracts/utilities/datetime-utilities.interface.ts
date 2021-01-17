import { Dayjs } from 'dayjs';
export interface DateTimeUtilities {
  calculateAgeByDOB(date: Dayjs | string): string;
  convertDateDayJsToDateString(date: Dayjs, format: string): string;
  convertDateStringToDateDayjs(date: string, format: string): Dayjs;
}