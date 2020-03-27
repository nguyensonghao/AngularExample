import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'validate-password',
  templateUrl: './validate-password.component.html',
  styleUrls: ['./validate-password.component.scss']
})

export class ValidatePasswordComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() submited: boolean;

  constructor() { }
}
