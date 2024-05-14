import { Component } from '@angular/core';
import { ParentKidsService } from './services/parent-kids.service';
import { UserI } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 parentsFromDb : UserI[] = [] as UserI[]
    constructor(private userService: ParentKidsService){}


    getparents() : void {
this.userService.getParents().subscribe(res => {
 this.parentsFromDb =  res
 console.log(res)
})
    }
    ngOnInit(): void {
this.getparents()
    }
}
