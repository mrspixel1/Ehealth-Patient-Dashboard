import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatSpinner } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './PatientDashboard/home/home.component';
import { ProfileComponent } from './PatientDashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './PatientDashboard/table/table.component';
import { NotificationComponent } from './PatientDashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './PatientDashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './PatientDashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './PatientDashboard/settings/settings.component';
import { SettingsService } from './services/settings.service';
import { PatientInsertComponent } from './PatientDashboard/patient-insert/patient-insert.component';
import { PatientDisplayComponent } from './PatientDashboard/patient-display/patient-display.component';
import { PatientGiveaccessComponent } from './PatientDashboard/patient-giveaccess/patient-giveaccess.component';
import { PatientCreateComponent } from './PatientDashboard/patient-create/patient-create.component';
import { AuthInterceptor } from './page/auth-interceptor';
import { AuthGuard } from './page/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PatientInsertComponent,
    PatientDisplayComponent,
    PatientGiveaccessComponent,
    PatientCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard, SettingsService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
