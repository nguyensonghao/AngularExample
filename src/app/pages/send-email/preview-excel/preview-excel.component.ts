import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'preview-excel',
  templateUrl: './preview-excel.component.html',
  styleUrls: ['./preview-excel.component.scss']
})
export class PreviewExcelComponent {
  @Input() listEmployee: Array<Object>;
  @Output() close = new EventEmitter<any>();
  @Output() sendEmail = new EventEmitter<any>();
  sending: boolean;

  closeModal = () => {
    if (this.sending) {
      alert('Hệ thông đang tiến hành gửi email!');
    } else {
      this.close.emit();
    }    
  }

  send = () => {
    if (!this.sending) {
      this.sending = true;
      this.sendEmail.emit();
    }    
  }

}
