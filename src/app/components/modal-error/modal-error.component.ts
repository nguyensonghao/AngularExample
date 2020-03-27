import { Component } from '@angular/core';

@Component({
  selector: 'modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent {
  message: String;

  constructor() {
    this.message = '';
  }
}
