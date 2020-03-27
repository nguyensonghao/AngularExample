import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth/auth.service';
import { ShareService } from './../../services/share/share.service';
import { UserService } from 'src/app/services/user/user.service';
import { SUCCESS_STATUS } from 'src/app/constants/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {  
  isError: boolean;  
  isCalling: boolean;
  formLogin: FormGroup;
  messageError: string;    
  isValidFormSubmitted: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router,
    public shareService: ShareService, public userService: UserService) {
    this.isError = false;
    this.messageError = '';
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  login = () => {
    this.isValidFormSubmitted = false;
    if (this.formLogin.valid && !this.isCalling) {
      this.isValidFormSubmitted = true;
      this.isCalling = true;
      let value = this.formLogin.value;
      this.authService.login(value['username'], value['password']).then(res => {
        setTimeout(() => {
          this.isCalling = false;
          if (res['status'] == SUCCESS_STATUS) {
            this.isError = false;
            let user = res['data']['user'];
            user.token = res['data']['token'];
            this.authService.saveLocal(user);
            this.shareService.updateUser(this.userService.convertUser(user));
            this.router.navigate(['/']);
          } else {
            this.isError = true;
            this.messageError = res['message'];
          }
        }, 1000);       
      }).catch(e => {
        this.isCalling = false;
        window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
      })
    }
  }
}