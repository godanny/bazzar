import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BazCommonModule } from './common/BazCommon.module';


import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormGroupComponent } from './common/form-group/form-group.component';
import { FormFieldComponent } from './common/form-field/form-field.component';


@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    BazCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
