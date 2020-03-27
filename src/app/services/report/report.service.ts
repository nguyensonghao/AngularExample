import { LocalStorageService } from './../localStorage/local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Report } from '../../models/report/report';
import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

export class ReportService {

  constructor(public httpClient: HttpClient, public apiService: ApiService, public router: Router, public localStorageService: LocalStorageService) {}

  list = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}report/list`;
      this.apiService.getWithToken(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  find = (id): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}report/find/${id}`;
      this.apiService.getWithToken(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  delete = (id): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}report/delete/${id}`;
      this.apiService.getWithToken(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  validate = (file) => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}report/validate`;
      this.apiService.uploadFileWithToken(url, file).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  send = (title, time, data) => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}report/send`;
      this.apiService.postWithToken(url, {
        title, time,
        data: JSON.stringify(data)
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  sendEmailEmployee = (id) => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}employee/send-email/${id}`;
      this.apiService.getWithToken(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  getEmployeeByReportId = (reportId) => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}employee/list-by-report/${reportId}`;
      this.apiService.getWithToken(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })    
  }

  convert = (info): Report => {
    let report = new Report();
    report._id = info['_id'];
    report.title = info['title'];
    report.fileName = info['fileName'];
    report.createdAt = info['createdAt'];
    report.totalEmployee = info['totalEmployee'];
    report.totalSendSuccess = info['totalSendSuccess'];
    return report;
  }
}
