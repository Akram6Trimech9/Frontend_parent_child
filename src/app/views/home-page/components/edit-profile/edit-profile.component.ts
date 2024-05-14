import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent { }
