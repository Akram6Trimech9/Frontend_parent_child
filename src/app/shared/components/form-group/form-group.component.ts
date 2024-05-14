 import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'form-group',
    standalone: true,
    imports: [
       ReactiveFormsModule
    ],
      viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
    templateUrl: './form-group.component.html',
    styleUrl: './form-group.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent {
     @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.controlKey,
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl('')
      }))
  }
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
