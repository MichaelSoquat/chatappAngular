import { Component, forwardRef, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string = '';
  @Output() changed = new EventEmitter<string>(false);

  value!: string;
  isDisabled!: boolean;
  

  constructor( public controlservice:ControlsService) { }

  ngOnInit(): void {
    
  }

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    console.log(this.propagateChange)
    console.log(fn)
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyUp(event: any) {
    let value = event.target.value;
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);

  }
  onBlur() {
    this.propagateTouched();
  }
}
