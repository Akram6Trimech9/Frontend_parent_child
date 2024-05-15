import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentKidsService } from '../../../../services/parent-kids.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent  implements OnDestroy {
    tabName :  string ='profile'
    changeTab(event: any){
        this.tabName = event
     }
       children: any[] = [];
  param!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: ParentKidsService,
    private router: Router
  ) {       this.isOpenEdit= false
}
 fetchUser(){
   this.userService.getUserById(this.param).subscribe((res) => {
      this.children = res.children;
    });
 }
 async  ngOnInit() {
       this.isOpenEdit= false
     this.param = await  +this.activatedRoute.snapshot.params['id'];
 await this.fetchUser()
  }
  isOpenEdit : boolean = false
  navigateToChild(childId: string) {
   this.router.navigate([], { queryParams: { child: childId } });
   this.isOpenEdit= true
}
ngOnDestroy() {
   this.isOpenEdit= false
 }

 socials = [
  {
    id: 1,
    platform: 'Twitter',
    userName: '@joe',
    icon: 'twitter'
  },
  {
    id: 2,
    platform: 'Facebook',
    userName: '@joe',
    icon: 'facebook'
  },
  {
    id: 3,
    platform: 'Instagram',
    userName: '@joe',
    icon: 'instagram'
  }
];
 }
