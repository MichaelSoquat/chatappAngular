import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    CheckboxesModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    CheckboxesModule
  ]
})
export class ControlsModule { }
