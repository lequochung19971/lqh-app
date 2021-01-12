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
      invalidDate: this.showMessage('INVALID_DATE'),
      required: this.showMessage('REQUIRED'),
      maxLength: this.showMessage('MAX_LENGTH'),
      minLength: this.showMessage('MIN_LENGTH'),
      email: this.showMessage('INVALID_EMAIL'),
      maxLengthWithNumberAndFieldName: this.showMessage('MAX_LENGTH_OF_FIELD_NAME', {
        fieldName: errorValue.fieldName,
        max: errorValue.max,
      }),
      invalidPassword: this.showMessage('INVALID_PASSWORD'),
      invalidConfirmPassword: this.showMessage('INVALID_CONFIRM_PASSWORD'),
    };
  }

  getErrorMessage(errorValue: ErrorParams, errorName: string): string {
    return this.messages(errorValue)[errorName];
  }

  showMessage(key: string, params?: object): string {
    return this.translateService.instant(key, params);
  }
}
