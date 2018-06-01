import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormGroupComponent } from './../../common/form-group/form-group.component';
import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

import * as formConfig from '../../config';

@Component({
  selector: 'baz-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.styl']
})
export class SubCategoryComponent implements OnInit {
  @HostBinding( 'class.fxFlex' ) true;

  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;

  formInstance: FormGroup;
  fields: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.fields = formConfig.subCategoryForm;
  }

  doSubmit(): Promise<boolean> {
    console.log(this.formGroupComponent.formInstance.value);
    this.validateForm();

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      return this.router.navigate( ['sub-category'] );
    }
  }

  goBack(): Promise<boolean> {
    return this.router.navigate( [ 'category' ] );
  }

  private validateForm(): void {

    Object.keys( this.formGroupComponent.formInstance.controls ).forEach( field => {
      const control = this.formGroupComponent.formInstance.get( field );
      control.markAsDirty( { onlySelf: true } );
      control.markAsTouched( { onlySelf: true } );
    } );
  }

}
