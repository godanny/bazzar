import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BazCommonModule } from './common/BazCommon.module';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent
  }
];

@NgModule( {
  declarations: [
    WelcomeComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    BazCommonModule,
    FlexLayoutModule,
    RouterModule.forRoot( routes )],
  exports: [
    RouterModule,
    WelcomeComponent,
    CategoryComponent,
    SubCategoryComponent
  ]
})
export class AppRoutingModule { }
