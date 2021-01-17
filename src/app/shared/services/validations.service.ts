import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { UtilitiesService } from './utilities.service';
import { PasswordService } from './password.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  constructor(
    protected utilitiesService: UtilitiesService,
    protected passwordService: PasswordService
  ) { }

  invalidDate(): ValidatorFn {
    return (control: AbstractControl) => {
      const { value } = control;

      if (value) {
        const isStringAndLengthLessThan10: boolean = typeof value === 'string' && value.length < 10;
        let isDayJsAndInvalid: boolean = false;
  
        if (value.length === 10) {
          const convertedValue = this.utilitiesService.convertDateStringToDateDayjs(value, 'DD/MM/YYYY')
          isDayJsAndInvalid = typeof convertedValue === 'object' && !(convertedValue as Dayjs).isValid()
        }
  
        if (isStringAndLengthLessThan10 || isDayJsAndInvalid) {
          return { invalidDate: true };
        }
      }
  
      return null;
    }
  }

  invalidMaxLengthWithFieldName(max: number, fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && control.value.length > max) {
        return { maxLengthWithNumberAndFieldName: { fieldName, max } };
      }

      return null;    
    }
  }
  invalidMinLengthWithFieldName(min: number, fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && control.value.length < min) {
        return { minLengthWithNumberAndFieldName: { fieldName, min } };
      }

      return null;    
    }
  }

  invaliedIDCardInfo(): ValidatorFn {
    return (group: FormGroup) => {
      if (group?.value) {
        let hasError = this.utilitiesService.formGroupHasErrors(group);

        if (hasError) {
          return { invalidIDCard: true }
        }
      }
      return null;
    }
  }

  invalidPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        const weakness = this.passwordService.weakPasswords(control.value);
        const strengthPercent = this.passwordService.calculatePasswordStrengthPercent(weakness);

        if (strengthPercent <= 85) {
          return { invalidPassword: true };
        }
      }

      return null;
    };
  }

  invalidConfirmPassword(): ValidatorFn {
    return (control: FormControl) => {
      const { value } = control;

      if (value) {
        const { parent: formGroup } = control;
        const passwordControl = formGroup.get('password');
        const passwordEqualConfirmPassword = passwordControl?.value && (control.value === passwordControl.value);
        return passwordEqualConfirmPassword ? null : { invalidConfirmPassword: true };
      }

      return null;
    }
  }
}
