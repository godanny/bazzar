
import { Component, Input, ContentChild } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BazInputDirective } from '../form-field/input/input.directive';


@Component( {
  selector: 'baz-date',
  template: `<ng-content></ng-content>`,

  styleUrls: [ 'date.styl' ],
} )


export class DateComponent {
  @Input() group: FormGroup;
  @Input() name: string;
  @ContentChild( BazInputDirective ) _control: BazInputDirective;

  constructor(
  ) {
  }

  hasError(): boolean {
    const control: AbstractControl = this.group.get( this.name );
    return control.invalid && control.touched;
  }
}


