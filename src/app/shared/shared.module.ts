import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ParentCardComponent } from './components/parent-card/parent-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ParentCardComponent,
CarouselComponent,
TabsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ],
  exports:[HeaderComponent,ParentCardComponent,CarouselComponent,TabsComponent]
})
export class SharedModule { }
