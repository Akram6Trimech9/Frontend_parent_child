import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl:'./tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
    @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    onTabChange(tabName: string) {
        this.tabChanged.emit(tabName);
    }
}
