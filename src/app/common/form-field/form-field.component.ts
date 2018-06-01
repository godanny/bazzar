import {
  Component,
  ContentChild,
  AfterContentInit,
  AfterViewInit,
  Input,
  ContentChildren,
  QueryList,
  // ChangeDetectorRef
} from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { BazInputDirective } from './input/input.directive';
import { BazErrorDirective } from './error.directive';

@Component({
  selector: 'baz-form-field',
  exportAs: 'bazFormField',
  templateUrl: 'form-field.component.html',
  styleUrls: [ 'form-field.component.styl', './input/input.styl' ],
  animations: [
    trigger( 'errorMessages', [
      state( 'enter', style( { opacity: 1, transform: 'translateY(0%)' } ) ),
      transition( 'void => enter', [
        style( { opacity: 0, transform: 'translateY(-100%)' } ),
        animate( '300ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)' ),
      ] ),
    ] ),
  ],
})
export class FormFieldComponent implements AfterContentInit, AfterViewInit {
  private placeholder: string;

  animationState = '';
  @ContentChild( BazInputDirective ) _control: BazInputDirective;
  @ContentChildren( BazErrorDirective ) _errorChildren: QueryList<BazErrorDirective>;
  constructor() { }

  ngAfterContentInit() {

    const ngControl = this._control.ngControl;

    if ( ngControl && ngControl.valueChanges ) {

      ngControl.valueChanges.subscribe( ( changes ) => {

        // Required error has the highest priority. Disable other validations when Required is true
        //
        if ( ngControl.hasError( 'required' )  ) {
          const keys = Object.keys( ngControl.errors );
          const errors: any = ngControl.errors;
          keys.forEach( key => {
            if ( key !== 'required' ) {
              delete errors[ key ];
            }
          } );
          ngControl.control.setErrors( errors );
        }
        // console.log( 'value changed', changes, this._control.errorState );

      } );
    }


  }

  _getDisplayedMessages(): 'error' {
    return ( this._errorChildren && this._errorChildren.length > 0 &&
      this._control.errorState ) ? 'error' : null;
  }
  ngAfterViewInit() {
    // Avoid animations on load.
    this.animationState = 'enter';
    // this._changeDetectorRef.detectChanges();
  }
  hasLabel(): boolean {
    return !!this._control.label;
  }

  hasSubHeading(): boolean {
    return !!this._control.subHeading;
  }

  hasError(): boolean {
    return ( this._errorChildren && this._errorChildren.length > 0 && this._control.errorState );
  }

}
