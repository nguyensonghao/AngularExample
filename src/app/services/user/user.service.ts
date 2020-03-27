import { Injectable } from '@angular/core';

import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  convertUser = (info: Object): User => {
    let user = new User();
    user._id = info['_id'];
    user.username = info['username'];
    user.token = info['token'];
    user.createdAt = info['createdAt'];
    return user;
  }  
}
