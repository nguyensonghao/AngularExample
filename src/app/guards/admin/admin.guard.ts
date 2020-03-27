import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
import { ShareService } from 'src/app/services/share/share.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLogin()) {      
      return true;
    }
    
    this.router.navigate(['/dang-nhap']);
    return false;
  }
}