import { Component } from '@angular/core';

import { ShareService } from './services/share/share.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor (public shareService: ShareService, public userService: UserService, public authService: AuthService) {
    if (this.authService.isLogin()) {
      let user = this.authService.getLocal();
      this.shareService.updateUser(this.userService.convertUser(user));
    }    
  }
}
