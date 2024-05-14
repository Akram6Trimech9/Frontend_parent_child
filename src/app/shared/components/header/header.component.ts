import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../models/user';
import { ParentKidsService } from '../../../services/parent-kids.service';

@Component({
  selector: 'global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeUser: UserI | null = null;

  constructor(private userService: ParentKidsService) {}

  ngOnInit(): void {
    this.getActiveUser();

  }

  getActiveUser(): void {
    this.userService.user.subscribe((res) => {
      console.log(res, "res");
      this.activeUser = res;
 console.log(  res?.firstName)
    });
  }
}
