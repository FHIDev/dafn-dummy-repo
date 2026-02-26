import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
} from '@angular/forms';

import { FhiButtonAngularWrapper } from '@fhidev/pull-request-designsystem-355/angular-wrappers/fhi-button.component';
import {
  FhiTextInputAngularWrapper,
  FhiTextInputValueAccessor,
} from '@fhidev/pull-request-designsystem-355/angular-wrappers/fhi-text-input.component';
import { FhiDisplayAngularWrapper } from '@fhidev/pull-request-designsystem-355/angular-wrappers/fhi-display.component';
import {
  FhiCheckboxAngularWrapper,
  FhiCheckboxValueAccessor,
} from '@fhidev/pull-request-designsystem-355/angular-wrappers/fhi-checkbox.component';
import {
  FhiRadioAngularWrapper,
  FhiRadioValueAccessor,
} from '@fhidev/pull-request-designsystem-355/angular-wrappers/fhi-radio.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FhiButtonAngularWrapper,
    FhiDisplayAngularWrapper,
    FhiRadioAngularWrapper,
    FhiRadioValueAccessor,
    FhiCheckboxAngularWrapper,
    FhiCheckboxValueAccessor,
    FhiTextInputAngularWrapper,
    FhiTextInputValueAccessor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';

  myForm = new FormGroup({
    myRadio: new FormControl('option1'),
    myCheckbox: new FormControl(true),
    myTextInput: new FormControl(''),
  });

  handleClick() {
    console.log('formControl:', this.myForm.value);
  }
}
