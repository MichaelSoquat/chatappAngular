import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
  exports: [
    ButtonComponent
  ]
})


export class ButtonModule {

 }
