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
    this.setErrorStatus(this.hasError());
  }

  hasError() {
    return this.control.errors != null;
  }

  setErrorStatus(status: boolean) {
    this.controlservice.hasError = status;
  }

  get errorKey(): any {
    this.checkError();
    return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  }

  ngOnDestroy() {
    this.setErrorDefault();
  }

  setErrorDefault() {
    this.controlservice.hasError = false;
  }

}
