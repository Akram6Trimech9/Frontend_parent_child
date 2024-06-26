 import {   Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserI } from '../../../models/user';

@Component({
    selector: 'carousel',
    templateUrl:'./carousel.component.html',
    styleUrl: './carousel.component.css',
 })
export class CarouselComponent {
    @Input()  parents:UserI[] =[] as UserI[]
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
        850: {
        items: 4
      },
        950: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }

 }
