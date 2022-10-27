import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.scss'],

})
export class CreateChannelComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null,
        {
          validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur',
        }]
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value);
      //do something
    }
  }


  onPatchValue(value: string): void {
    console.log(value)
    this.form.patchValue({
      input: value
    });
  }

  
  onToggleDisable() {

  }

}
