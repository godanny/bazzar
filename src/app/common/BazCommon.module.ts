import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { BazCheckboxComponent } from './form-field/checkbox/checkbox.component';

import { BazErrorDirective } from './form-field/error.directive';
import { BazInputDirective } from './form-field/input/input.directive';


@NgModule( {
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormGroupComponent,
    FormFieldComponent,
    BazInputDirective,
    BazErrorDirective,
    BazCheckboxComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormGroupComponent,
    FormFieldComponent,
    BazInputDirective,
    BazErrorDirective,
    BazCheckboxComponent
  ]
} )

export class BazCommonModule { }
