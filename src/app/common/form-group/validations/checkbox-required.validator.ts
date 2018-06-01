// since an uncheck checkbox will have the model value 'false', the validator is not yet firing. This seems to be a bug in Angular
// https://github.com/angular/angular/issues/11459
import { AbstractControl } from '@angular/forms';

export function ValidateCheckboxRequired( control: AbstractControl ) {

  if ( !control.value ) {
    return { required: true };
  }
  return null;

}
