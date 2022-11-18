import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Checkbox } from 'src/app/models/interfaces/checkbox';


@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})

export class CheckboxesComponent implements OnInit, ControlValueAccessor {



  @Input() checkbox!: Checkbox;
  @Output() changed = new EventEmitter<any>();
  value: boolean = false;
  isDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }



  private propagateChange: any = () => { };

  writeValue(value: boolean) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(event: any): void {
    this.value = event.target.checked;
    this.checkbox.value = this.value;
    console.log(this.value);
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  isChecked(value: any): boolean {
    return value;

  }
}
