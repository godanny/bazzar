
import { Component, Input, ContentChild } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';



@Component( {
  selector: 'baz-checkbox',
  templateUrl: 'checkbox.html',

  styleUrls: [ 'checkbox.styl' ],
} )

export class BazCheckboxComponent {
  @Input() group: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() tabindex: string;

  constructor(
  ) {
    // console.log(this, this.group, this.name, this.label);
  }

  hasError(): boolean {
    const control: AbstractControl = this.group.get( this.name );
    return control.invalid && control.touched;
  }
}
