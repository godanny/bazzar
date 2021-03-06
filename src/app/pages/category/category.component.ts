import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroupComponent } from './../../common/form-group/form-group.component';
import * as formConfig from '../../config';

@Component({
  selector: 'baz-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {
  @HostBinding( 'class.fxFlex' ) true;

  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;

  formInstance: FormGroup;
  fields: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.fields = formConfig.categoryForm;
  }

  doSubmit(): any {
    console.log(this.formGroupComponent.formInstance.value);
    this.validateForm();

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      return this.router.navigate( ['sub-category'] );
    }
  }

  goBack(): void {
    this.router.navigate( [ 'welcome' ] );
  }

  private validateForm(): void {

    Object.keys( this.formGroupComponent.formInstance.controls ).forEach( field => {
      const control = this.formGroupComponent.formInstance.get( field );
      control.markAsDirty( { onlySelf: true } );
      control.markAsTouched( { onlySelf: true } );
    } );
  }

}
