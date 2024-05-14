import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserI } from '../../../../models/user';
import { ParentKidsService } from '../../../../services/parent-kids.service';

@Component({
  selector: 'app-father',
  templateUrl:'./father.component.html',
  styleUrl: './fathers.component.css',
})
export class FathersComponent implements OnInit{
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
this.userService.resetUserSubject()
    }
}
