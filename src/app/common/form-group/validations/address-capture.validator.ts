import { AbstractControl } from '@angular/forms';


export function ValidateAddressCapture( control: AbstractControl ) {

  if (control.hasError( 'address-capture') ) {
    return { 'address-capture': true};
  }
  return null;
}
