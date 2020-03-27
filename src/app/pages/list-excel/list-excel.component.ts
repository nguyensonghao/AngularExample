import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SUCCESS_STATUS, ERROR_STATUS, API_URL } from './../../constants/config';
import { Report } from '../../models/report/report';
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-list-excel',
  templateUrl: './list-excel.component.html',
  styleUrls: ['./list-excel.component.scss']
})

export class ListExcelComponent implements OnInit {
  listReport: Array<Report>;

  constructor(public reportService: ReportService, public router: Router) {
    this.listReport = [];
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
    this.reportService.list().then(res => {
      if (res['status'] == SUCCESS_STATUS) {
        let reports = res['data'].map(item => {
          return this.reportService.convert(item);
        })

        this.listReport = reports;
      } else if (res['status'] == ERROR_STATUS) {
        window.alert(res['message']);
      } else {
        this.router.navigate(['/dang-nhap']);
      }
    }).catch(err => {
      window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
    })
  }

  download = (fileName) => {
    window.open(`${API_URL}reports/${fileName}`);
  }

  delete = (id) => {
    if (window.confirm('Bạn có thực sự muốn xóa bản ghi này không?')) {
      this.reportService.delete(id).then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.getList();
        } else if (res['status'] == ERROR_STATUS) {

        } else {
          this.router.navigate(['/dang-nhap']);
        }
      })
    }
  }
}