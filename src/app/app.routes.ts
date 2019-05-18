
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PatientDashboard/home/home.component';
import { ProfileComponent } from './PatientDashboard/profile/profile.component';
import { TableComponent } from './PatientDashboard/table/table.component';
import { NotificationComponent } from './PatientDashboard/notification/notification.component';
import { SweetAlertComponent } from './PatientDashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './PatientDashboard/settings/settings.component';

import { RootComponent } from './PatientDashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { PatientInsertComponent } from './PatientDashboard/patient-insert/patient-insert.component';
import { PatientDisplayComponent } from './PatientDashboard/patient-display/patient-display.component';
import { PatientGiveaccessComponent } from './PatientDashboard/patient-giveaccess/patient-giveaccess.component'
import { PatientCreateComponent } from './PatientDashboard/patient-create/patient-create.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './page/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'PatientDashboard', component: RootComponent, canActivate: [AuthGuard], children: [
    {path: '', component: HomeComponent},
    {path: 'PatientInsert', component: PatientInsertComponent },
    {path: 'PatientDisplay', component: PatientDisplayComponent},
    {path: 'PatientGiveaccess', component: PatientGiveaccessComponent},
    {path: 'PatientCreate', component: PatientCreateComponent},
    {path: 'table', component: TableComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
  ]}
];


export const routing = RouterModule.forRoot(routes, {enableTracing: true});

