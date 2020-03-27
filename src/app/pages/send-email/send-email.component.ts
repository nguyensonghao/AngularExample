import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ReportService } from '../../services/report/report.service';
import { SUCCESS_STATUS, ERROR_STATUS } from './../../constants/config';
import { UtilService } from './../../services/util/util.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})

export class SendEmailComponent {
  isError: boolean;
  isSuccess: boolean;
  formSend: FormGroup;
  fileName: String;
  isSending: boolean;
  messageError: String;  
  isValidating: boolean;  
  isShowPreview: boolean;
  isValidFormSubmitted: boolean;
  listEmployeePreview: Array<Object>;
  @ViewChild("fileInput") fileExcel: ElementRef;

  constructor(public fb: FormBuilder, public reportService: ReportService, 
    public utilService: UtilService, public router: Router) {
    this.formSend = this.fb.group({
      title: ['', Validators.required],
      file: ['', Validators.required]
    })
    this.utilService.showError('Xin chao');
  }

  fileEvent = (fileInput: Event) => {
    if (fileInput && fileInput['target'] && fileInput['target']['files'].length) {
      let file = fileInput['target']['files'][0];
      this.fileName = file.name;
    } else {
      this.fileName = '';
    }
  }

  validate = (fi) => {
    return new Promise((resolve, reject) => {
      let file = fi.files[0];
      this.isValidating = true;
      this.reportService.validate(file).then(res => {
        this.isError = false;
        this.isValidating = false;
        if (res['status'] == SUCCESS_STATUS) {
          this.listEmployeePreview = res['data'];
          resolve(true);
        } else if (res['status'] == ERROR_STATUS) {
          this.isError = true;
          this.messageError = res['message'];
          resolve(false);
        } else {
          this.router.navigate(['/dang-nhap']);
          resolve(false);
        }
      }).catch(e => {
        window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
        this.isValidating = false;
        resolve(false);
      })
    })     
  }

  send = () => {
    this.isValidFormSubmitted = false;
    this.isSuccess = false;
    if (this.formSend.valid && !this.isValidating && !this.isSending) {
      this.isValidFormSubmitted = true;      
      let fi = this.fileExcel.nativeElement;
      if (fi.files && fi.files[0]) {
        this.validate(fi).then(resValidate => {
          if (resValidate) {
            this.isShowPreview = true;
          }
        })
      }      
    }
  }

  sendEmail = () => {
    let value = this.formSend.value;
    this.isSending = true;
    let time = moment().format('MM/YYYY');
    this.reportService.send(value.title, time, this.listEmployeePreview).then(res => {
      this.isSending = false;
      this.isShowPreview = false;
      if (res['status'] == SUCCESS_STATUS) {
        this.isSuccess = true;
      } else if (res['status'] == ERROR_STATUS) {
        this.isError = true;
        this.messageError = res['message'];
      } else {
        this.router.navigate(['/dang-nhap']);
      }
    }).catch(e => {
      window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
      this.isShowPreview = false;
      this.isSending = false;
    })
  }

  closePreview = () => {
    this.isShowPreview = false;
  }
}
