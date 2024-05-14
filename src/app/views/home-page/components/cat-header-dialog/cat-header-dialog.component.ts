import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cat-header-dialog',
  template: `<div class="flex-icon">
    <div class="icon">
      <i class="nes-octocat animate"></i>
    </div>
    <div class="text">
      <div class="nes-balloon from-left">
        <p style="color: #ff0000">
          <span>Click on a card to access the profile.</span>
        </p>
        <p>Here you'll find all parents.</p>
      </div>
    </div>
  </div>`,
  styleUrl: './cat-header-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatHeaderDialogComponent {}
