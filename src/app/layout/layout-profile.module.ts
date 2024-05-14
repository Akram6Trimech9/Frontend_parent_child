import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ],

})
export class LayoutProfileModule { }
