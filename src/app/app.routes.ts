import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomePageRoutingModule } from './views/home-page/home-page-routing.module';


const routes: Routes = [
   {
    path: '',
    component:MainLayoutComponent ,
    loadChildren: () =>HomePageRoutingModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }