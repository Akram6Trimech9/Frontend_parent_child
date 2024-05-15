import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent  {
    constructor(private router: Router) {
   this.router.navigate([], { queryParams: { child:null } });

    }
}
