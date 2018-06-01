import { AbstractControl, ValidatorFn } from '@angular/forms';

export class EmailFormatsValidators {

  public static validatePattern(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = <string>control.value;
      return value.match(reg) ? null : { 'pattern': { value } };
    };
  }

  static validateEmail(control: AbstractControl) {
    const EMAIL_REGEX = /^[._a-z0-9+-]*[^.]@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
    const value = <string>control.value;

    return value.match(EMAIL_REGEX) ? null : {
      pattern: { value }
    };
  }
}
