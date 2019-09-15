import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
  declarations: [InputComponent, ButtonGroupComponent],
  exports: [
    InputComponent,
    ButtonGroupComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
