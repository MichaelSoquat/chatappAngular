import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';

const declarations = [
  MainNavComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
  ],
  exports: [...declarations],
})

export class CoreModule { }
