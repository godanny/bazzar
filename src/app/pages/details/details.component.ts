import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroupComponent } from './../../common/form-group/form-group.component';

import { detailsForm } from '../../config';

@Component({
  selector: 'baz-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {
  @HostBinding( 'class.fxFlex' ) true;

  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;

  public formInstance: FormGroup;
  public fields: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.fields = detailsForm;
  }

  doSubmit(): Promise<boolean> {
    console.log(this.formGroupComponent.formInstance.value);
    this.validateForm();

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      return this.router.navigate( ['lists'] );
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
