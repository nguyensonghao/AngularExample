import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SUCCESS_STATUS, ERROR_STATUS } from './../../constants/config';
import { AuthService } from './../../services/auth/auth.service';
import { ShareService } from './../../services/share/share.service';
import { User } from './../../models/user/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent {  
  user: User;
  isError: boolean;
  isCalling: boolean;  
  showMessage: boolean;
  contentMessage: string;
  formChangePassword: FormGroup;
  isValidFormSubmitted: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router, public shareService: ShareService) {
    this.formChangePassword = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    })

    this.shareService.user.subscribe(res => {
      this.user = res;
    })
  }

  change = () => {
    this.isValidFormSubmitted = false;
    if (this.formChangePassword.valid && !this.isCalling) {
      this.isCalling = true;
      this.isValidFormSubmitted = true;      
      let value = this.formChangePassword.value;      
      this.authService.changePassword(value['oldPassword'], value['newPassword'], value['confirmPassword'], this.user._id).then(res => {
        setTimeout(() => {          
          this.isCalling = false;
          this.showMessage = true;
          if (res['status'] == SUCCESS_STATUS) {
            this.isError = false;
            this.contentMessage = 'Đổi mật khẩu thành công!';
          } else if (res['status'] == ERROR_STATUS) {
            this.isError = true;
            this.contentMessage = res['message'];
          } else {
            this.router.navigate(['/dang-nhap']);
          }
        }, 1000);
      }).catch(e => {
        this.isCalling = false;
        window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
      })
    }
  }
}
