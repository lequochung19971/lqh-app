import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  invalidDate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (typeof control.value === 'string') {
        return null
      }
    }

    return null;
  }
}
