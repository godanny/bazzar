
import {
  Directive,
  Input,
  HostBinding,
  Self,
  Optional,
  DoCheck,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive( {
  selector: '[bazInput]',
  exportAs: 'bazInput',
} )
export class BazInputDirective implements DoCheck {

  @Input() label = '';
  @Input() subHeading = '';
  errorState = false;

  @HostBinding( 'class' ) classes = 'baz-input-element';

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
  }

  ngDoCheck(): void {
    if ( this.ngControl ) {
      this.errorState = this.ngControl.touched && this.ngControl.invalid;
    }
  }




}
