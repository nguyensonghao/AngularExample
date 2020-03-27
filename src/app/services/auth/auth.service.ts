import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from './../../constants/config';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { ApiService } from './../api/api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private localStorageService: LocalStorageService, public httpClient: HttpClient, public apiService: ApiService) { }

  login = (username: string, password: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}user/login`;
      this.httpClient.post(url, {username, password}).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  getProfile = () => {

  }

  logout = () => {
    this.localStorageService.delete('user');
  }

  isLogin = () => {
    let user = this.localStorageService.get('user');
    if (user && typeof user === 'object') {
      return user['_id'] && user['username'] && user['token'];
    }

    return false;
  }

  saveLocal = (user: Object) => {
    this.localStorageService.set('user', user);
  }

  getLocal = (): Object => {
    return this.localStorageService.get('user');
  }

  getToken = (): string => {
    let user = this.getLocal();
    return user ? user['token'] : null;
  }

  changePassword = (oldPassword, newPassword, confirmPassword, id) => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}user/change-password`;
      this.apiService.postWithToken(url, {oldPassword, newPassword, confirmPassword, id}).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
}