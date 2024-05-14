 import {   Component, Input } from '@angular/core';
import { UserI } from '../../../models/user';
import { Router } from '@angular/router';
import { ParentKidsService } from '../../../services/parent-kids.service';

@Component({
    selector: 'app-parent-card',
    templateUrl:'./parent-card.component.html',
    styleUrls: ['./parent-card.component.css'],
 })
export class ParentCardComponent {
    @Input() parent :UserI  = {} as UserI
    constructor(private userService : ParentKidsService) {}
    moveToProfile(user : UserI) : void {
 this.userService.navigateToProfile(user)
}
}
