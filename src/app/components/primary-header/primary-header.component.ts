import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user/user';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})

export class PrimaryHeaderComponent implements OnInit {
  user: User;

  constructor(public shareService: ShareService) {
    this.user = new User();
  }

  ngOnInit() {
    this.shareService.user.subscribe(res => {
      this.user = res;
    })
  }
}
