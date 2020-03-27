import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, public shareService: ShareService) {

  }

  ngOnInit() {
  }

  logout = () => {
    if (window.confirm('Bạn có chắc muốn đăng xuất khỏi hệ thống?')) {
      this.authService.logout();      
      this.router.navigate(['/dang-nhap']);
      this.shareService.updateUser(null);
    }
  }
}
