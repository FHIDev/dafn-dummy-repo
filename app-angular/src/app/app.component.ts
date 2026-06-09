import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import * as FHIAngular from '@fhidev/pull-request-designsystem-355/angular-wrappers/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FHIAngular.FhiButtonAngularWrapper,
    FHIAngular.FhiTextInputAngularWrapper,
    FHIAngular.FhiTextInputValueAccessor,
    FHIAngular.FhiFlexAngularWrapper,
    FHIAngular.FhiDataTableAngularWrapper,
    FHIAngular.FhiDataTableRowAngularWrapper,
    FHIAngular.FhiDataTableCellAngularWrapper,
    FHIAngular.FhiCheckboxAngularWrapper,
    FHIAngular.FhiCheckboxValueAccessor,
    FHIAngular.FhiTitleAngularWrapper,
    FHIAngular.FhiModalDialogAngularWrapper,
    FHIAngular.FhiDateInputAngularWrapper,
    FHIAngular.FhiDateInputValueAccessor,
    FHIAngular.FhiRadioAngularWrapper,
    FHIAngular.FhiRadioValueAccessor,
    FHIAngular.FhiTagAngularWrapper,
    FHIAngular.FhiTooltipAngularWrapper,
    FHIAngular.FhiIconCircleInfoAngularWrapper
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-wrappers';

  // Registrer ny bruker skjema.
  newUserForm = new FormGroup({
    name: new FormControl('Daniel Nilsen'),
    email: new FormControl('daniel@example.com'),
    phone: new FormControl('123-456-7890'),
    address: new FormControl('0358 Oslo, Norway'),
    birthdate: new FormControl('2000-01-01'),
    gender: new FormControl('male'),
    robot: new FormControl(false),
  });

  handleNewUserSubmit() {
    console.log(this.newUserForm.value);
  }

  // Tilbakemeldingsskjema.
  isFeedbackDialogOpen = false;

  feedbackForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  handleFeedbackSubmit() {
    console.log(this.feedbackForm.value);
  }
}
