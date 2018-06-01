import { AbstractControl } from '@angular/forms';

export function validatePhone( control: AbstractControl ) {

  if (control.hasError( 'phone') ) {
    return { phone: true};
  }
  return null;
}
