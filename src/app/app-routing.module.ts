import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './guards/admin/admin.guard';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ListExcelComponent } from './pages/list-excel/list-excel.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { DetailExcelComponent } from './pages/detail-excel/detail-excel.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '',
        component: SendEmailComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'danh-sach-excel',
        component: ListExcelComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'excel/:id',
        component: DetailExcelComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'doi-mat-khau',
        component: ChangePasswordComponent,
        canActivate: [AdminGuard]
      }
    ]
  },
  { 
    path: 'dang-nhap', 
    component: LoginComponent 
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
