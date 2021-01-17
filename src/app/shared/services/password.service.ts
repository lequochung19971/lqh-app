import { Injectable } from '@angular/core';
import { MismatchedPassword, StrongAndWeakPasswordModel, WeakPasswordModel } from '@core/models/strong-weak-password.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'any',
})
export class PasswordService {
  private _passwordMeter: StrongAndWeakPasswordModel;
  private _mismatchedMessagesConfig: MismatchedPassword[] = [
    MismatchedPassword.INVALID_CHARACTERS_LENGTH,
    MismatchedPassword.AT_LEAST_ONE_SPECIAL,
    MismatchedPassword.AT_LEAST_ONE_UPPERCASE,
    MismatchedPassword.AT_LEAST_ONE_LOWERCASE,
    MismatchedPassword.AT_LEAST_ONE_NUMBER,
  ];

  constructor(protected translateService: TranslateService) {}

  get passwordMeterInfo(): StrongAndWeakPasswordModel {
    return this._passwordMeter;
  }

  get mismatchedMessagesConfig(): MismatchedPassword[] {
    return this._mismatchedMessagesConfig;
  }

  getPasswordMeter(value: string, barWidth: number): StrongAndWeakPasswordModel {
    const weaknesses = this.weakPasswords(value) as WeakPasswordModel[];
    const percent = this.calculatePasswordStrengthPercent(weaknesses) as number;

    this._passwordMeter = {
      width: String((barWidth * percent) / 100),
      percent,
      weaknesses,
    };

    return this._passwordMeter;
  }

  calculatePasswordStrengthPercent(weaknesses: WeakPasswordModel[]) {
    let strenghPercent: number = 100;

    weaknesses.forEach((data) => {
      if (data?.deduction) {
        strenghPercent -= data.deduction;
      }
    });

    return strenghPercent;
  }

  weakPasswords(password: string): WeakPasswordModel[] {
    const meter = [];
    meter.push(this.stringLength(password));
    meter.push(this.lowerLetters(password));
    meter.push(this.upperLetters(password));
    meter.push(this.numberLetters(password));
    meter.push(this.specialLetters(password));

    return meter;
  }

  protected stringLength(password: string): WeakPasswordModel {
    const { length } = password;

    if (length <= 5) {
      return {
        mismatched: MismatchedPassword.INVALID_CHARACTERS_LENGTH,
        message: this.translateService.instant('YOUR_PASSWORD_IS_TOO_SHORT'),
        deduction: 60,
      };
    }

    if (length <= 8) {
      return {
        mismatched: MismatchedPassword.INVALID_CHARACTERS_LENGTH,
        message: this.translateService.instant('YOUR_PASSWORD_COULD_BE_LONGER'),
        deduction: 15,
      };
    }
  }

  protected lowerLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[a-z]/g;
    const type: string = 'lowercase characters';
    const mismatched = MismatchedPassword.AT_LEAST_ONE_LOWERCASE;
    return this.checkCharacterType({ password, regex, type, mismatched });
  }

  protected upperLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[A-Z]/g;
    const type: string = 'uppercase characters';
    const mismatched = MismatchedPassword.AT_LEAST_ONE_UPPERCASE;
    return this.checkCharacterType({ password, regex, type, mismatched });
  }

  protected numberLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[0-9]/g;
    const type: string = 'number';
    const mismatched = MismatchedPassword.AT_LEAST_ONE_NUMBER;
    return this.checkCharacterType({ password, regex, type, mismatched });
  }

  protected specialLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[$-/:-?{-~!"^_@`\[\]]/g;
    const type: string = 'special characters';
    const mismatched = MismatchedPassword.AT_LEAST_ONE_SPECIAL;
    return this.checkCharacterType({ password, regex, type, mismatched });
  }

  protected checkCharacterType({ password, regex, type, mismatched }): WeakPasswordModel {
    const { length } = password.match(regex) || [];

    if (length === 0) {
      return {
        mismatched: mismatched,
        message: this.translateService.instant('YOUR_PASSWORD_MUST_CONTAIN_AT_LEAST', { stringType: type }),
        deduction: 20,
      };
    }

    if (length < 2) {
      return {
        message: this.translateService.instant('YOUR_PASSWORD_COULD_USE_MORE', { stringType: type }),
        deduction: 5,
      };
    }
  }
}
