import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import pages
import { LoginComponent } from './pages/login/login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ListExcelComponent } from './pages/list-excel/list-excel.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DetailExcelComponent } from './pages/detail-excel/detail-excel.component';

// Import components
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { ValidatePasswordComponent } from './components/validate-password/validate-password.component';
import { ViewExcelComponent } from './pages/detail-excel/view-excel/view-excel.component';

// Import pipes
import { SalaryPipe } from './pipes/salary.pipe';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { PreviewExcelComponent } from './pages/send-email/preview-excel/preview-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    SendEmailComponent,
    ListExcelComponent,
    MenuLeftComponent,
    PrimaryHeaderComponent,
    LayoutComponent,
    ValidatePasswordComponent,
    DetailExcelComponent,
    ViewExcelComponent,
    SalaryPipe,
    ModalErrorComponent,
    PreviewExcelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
