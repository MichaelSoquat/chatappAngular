import { Component, OnInit, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],

})
export class FormFieldComponent implements OnInit {

  @Input() label: string = '';
  @Input() control!: AbstractControl;
  @Input() isInline: boolean = false;
  @Input() required: boolean = false;




  constructor(private controlservice: ControlsService) { }

  ngOnInit(): void {
  }

  checkError() {
    if (this.control.errors) {
      this.controlservice.hasError = true;
    }
    else {
      this.controlservice.hasError = false;
    }
  }
  get errorKey(): any {
    this.checkError();
    return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  }

}
