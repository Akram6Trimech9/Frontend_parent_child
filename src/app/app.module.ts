 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { NesModule } from 'ngx-nes-css';
import { BASE_URL_PROVIDER } from './cors/base-url.interceptor';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './views/home-page/home-page.module';
import { LayoutProfileModule } from './layout/layout-profile.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
 import { ParentKidsService } from './services/parent-kids.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     AppRoutingModule,
     BrowserModule,
    NesModule,
      BrowserAnimationsModule,
    ReactiveFormsModule,
LayoutProfileModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
        CarouselModule,
          ToastrModule.forRoot(),
   ],
  providers: [
    BASE_URL_PROVIDER,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }