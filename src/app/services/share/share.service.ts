import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  private userBehavior = new BehaviorSubject(new User());
  public user = this.userBehavior.asObservable();

  updateUser = (data: User) => {
    this.userBehavior.next(data);
  }
}
