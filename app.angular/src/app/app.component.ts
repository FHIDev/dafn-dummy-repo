import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import '@folkehelseinstituttet/designsystem/fhi-text-input';
import '@folkehelseinstituttet/designsystem/fhi-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'app.angular';

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.profileForm.value);
  }
}
