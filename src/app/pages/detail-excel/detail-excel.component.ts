import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SUCCESS_STATUS, ERROR_STATUS } from './../../constants/config';
import { ReportService } from '../../services/report/report.service';
import { Report } from 'src/app/models/report/report';

@Component({
  selector: 'app-detail-excel',
  templateUrl: './detail-excel.component.html',
  styleUrls: ['./detail-excel.component.scss']
})
export class DetailExcelComponent implements OnInit {  
  report: Report;
  showDetail: boolean;
  employee: Object;
  listEmployee: Array<Object>;
  showMessageSendEmailSuccess: Boolean;
  
  constructor(private activatedRoute: ActivatedRoute, public reportService: ReportService, public router: Router) {    
    this.listEmployee = [];
    this.report = new Report();
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reportService.getEmployeeByReportId(id).then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.listEmployee = res['data'];
        } else if (res['status'] == ERROR_STATUS) {
          window.alert(res['message']);
        } else {
          this.router.navigate(['/dang-nhap']);
        }
      }).catch (e => {
        window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
      })

      this.reportService.find(id).then(res => {
        if (res['status'] == SUCCESS_STATUS && res['data']) {
          this.report = this.reportService.convert(res['data']);
        }
      })
    }
  }

  detail = (employee) => {
    this.employee = employee;
    this.showDetail = true;
  }

  hideDetail = () => {
    this.showDetail = false;
  }

  reSend = (employee) => {
    if (!employee.reSending) {
      if (window.confirm(`Bạn có muốn gửi lại email thông báo lương cho ${employee['Họ và tên']} không?`)) {
        employee.reSending = true;
        this.reportService.sendEmailEmployee(employee._id).then(res => {
          employee.reSending = false;
          if (res['status'] == SUCCESS_STATUS) {
            employee.sent = true;
            this.showMessageSendEmailSuccess = true;
            setTimeout(() => {
              this.showMessageSendEmailSuccess = false;
            }, 3000);
          } else if (res['status'] == ERROR_STATUS) {
            window.alert(res['message']);
          } else {
            this.router.navigate(['/dang-nhap']);
          }
        }).catch (e => {
          employee.reSending = false;
          window.alert('Có vấn đề với việc kết nối tới server, vui lòng kết nối lại!');
        })
      }
    }    
  }
}
