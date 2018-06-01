import { AbstractControl } from '@angular/forms';

export function alphanumeric( control: AbstractControl ) {
  const value = <string>control.value;

  if (!value) {
    return null;
  }

  return value.match(/^[a-z0-9]+$/i) ? null : { 'alphanumeric': true };
}
