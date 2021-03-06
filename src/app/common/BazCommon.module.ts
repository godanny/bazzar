import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { BazCheckboxComponent } from './form-field/checkbox/checkbox.component';
import { DateComponent } from './date/date.component';

import { BazErrorDirective } from './form-field/error.directive';
import { BazInputDirective } from './form-field/input/input.directive';
import { BazCollapseComponent } from './form-field/collapse/collapse.component';


@NgModule( {
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DataTableModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormGroupComponent,
    FormFieldComponent,
    BazInputDirective,
    BazErrorDirective,
    BazCheckboxComponent,
    DateComponent,
    BazCollapseComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormGroupComponent,
    FormFieldComponent,
    BazInputDirective,
    BazErrorDirective,
    BazCheckboxComponent,
    DateComponent,
    BazCollapseComponent
  ]
} )

export class BazCommonModule { }
