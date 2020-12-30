import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorParams } from '../../core/models/error-params.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {
  constructor(protected translateService: TranslateService) {}

  messages(errorValue: ErrorParams) {
    return {
      invalidDate: this.showMessage('invalidDate'),
      required: this.showMessage('required'),
      maxLength: this.showMessage('maxLength'),
      minLength: this.showMessage('minLength'),
      email: this.showMessage('invalidEmail'),
      maxLengthWithNumberAndFieldName: this.showMessage('maxLengthOfFieldName', {
        fieldName: errorValue.fieldName,
        max: errorValue.max,
      }),
      invalidPassword: this.showMessage('invalidPassword'),
      invalidConfirmPassword: this.showMessage('invalidConfirmPassword'),
    };
  }

  getErrorMessage(errorValue: ErrorParams, errorName: string): string {
    return this.messages(errorValue)[errorName];
  }

  showMessage(key: string, params?: object): string {
    return this.translateService.instant(key, params);
  }
}
