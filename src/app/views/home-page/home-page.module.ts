import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home.component';
 import { CatHeaderDialogComponent } from './components/cat-header-dialog/cat-header-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { FathersComponent } from './components/fathers/fathers.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildsComponent } from './components/childs/childs.component';


@NgModule({
  declarations: [EditFormComponent,HomeComponent,CatHeaderDialogComponent,ProfileComponent,FathersComponent,EditProfileComponent,ChildsComponent],
  imports: [
    SharedModule,
    CommonModule,
    HomePageRoutingModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,

  ]
})
export class HomePageModule { }
