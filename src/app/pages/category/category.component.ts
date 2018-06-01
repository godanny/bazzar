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
  formInstance: FormGroup;
  fields: any[];
  @HostBinding( 'class.fxFlex' ) true;

  // get formgroup reference
  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;
  // end formgroup reference
  constructor(private router: Router) { }

  ngOnInit() {
    this.fields = formConfig.categoryForm;
  }

  doSubmit(): void {
    console.log(this.formGroupComponent.formInstance.value);
    this.validateForm();

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      // const leadId = this.leadService.leadId;
      // const payload = this.formatToLocaleDateString({ ...this.formGroupComponent.formInstance.value });
      // this.leadService.updateLead( payload )
      //   .subscribe( res => {
      //     return this.router.navigate( [ 'business-abn-details' ] );
      //   }, error => {
      //     console.error( error );
      //     if (error && error.status === 410) {
      //       this.router.navigate( [ 'thank-you' ] );
      //     }
      //   })
      // ;


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
