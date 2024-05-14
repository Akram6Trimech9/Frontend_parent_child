import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ProfileComponent } from './components/profile/profile.component';
import { FathersComponent } from './components/fathers/fathers.component';

const routes: Routes = [
   { path: '', component: FathersComponent },
   { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
