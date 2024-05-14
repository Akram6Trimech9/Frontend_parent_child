import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    tabName :  string ='profile'
    changeTab(event: any){
        this.tabName = event
     }
 }
