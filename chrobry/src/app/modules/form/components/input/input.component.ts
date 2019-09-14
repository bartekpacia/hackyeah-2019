import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { InputType } from '@app/modules/form/components/input/input.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input() id = `input-${InputComponent.count++}`;
  @Input() label: string;
  @Input() type: InputType;
  @Input() parentForm: FormGroup | FormArray;
  @Input() controlName: string;
  @Input() placeholder: string;

  static count = 0;

  get formControl(): FormControl {
    return this.parentForm.get(this.controlName) as FormControl;
  }

}
