import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PatternValidator {

  public static isValid(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = <string>control.value;
      return value.match(reg) ? null : { 'pattern': { value } };
    };
  }
}
