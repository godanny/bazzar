import { FormGroup } from '@angular/forms';
import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroupComponent } from './../../common/form-group/form-group.component';
import * as formConfig from '../../config';

@Component({
  selector: 'baz-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.styl']
})
export class WelcomeComponent implements OnInit {
  formInstance: FormGroup;
  fields: any[];
  wizardFlag = false;
  @HostBinding( 'class.fxFlex' ) true;

  // get formgroup reference
  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;
  // end formgroup reference
  constructor( private router: Router ) { }

  ngOnInit() {
    this.fields = formConfig.welcomeForm;
  }

  goBack(): void {
    this.router.navigate( [ 'welcome' ] );
  }

  doSubmit(): any {
    console.log(this.formGroupComponent.formInstance.value);
    this.validateForm();

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      return this.router.navigate( [ 'category' ] );
    }
  }

  private validateForm(): void {

    Object.keys( this.formGroupComponent.formInstance.controls ).forEach( field => {
      const control = this.formGroupComponent.formInstance.get( field );
      control.markAsDirty( { onlySelf: true } );
      control.markAsTouched( { onlySelf: true } );
    } );
  }



}
