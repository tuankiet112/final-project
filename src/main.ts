import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { DeviceListComponent } from './app/device-list/device-list.component';
import { DeviceDetailComponent } from './app/device-detail/device-detail.component';
import { AddDeviceComponent } from './app/add-device/add-device.component';
import { ManufacturerComponent } from './app/manufacturer/manufacturer.component';
import { TypeComponent } from './app/type/type.component';
import { SubnetmaskComponent } from './app/subnetmask/subnetmask.component';
import { CommandComponent } from './app/command/command.component';
import { AdminComponent } from './app/admin/admin.component';
import { AuthInterceptor } from './app/auth/auth.interceptor';
import { AuthGuard } from './app/auth/auth.guard';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'device-list', component: DeviceListComponent },
  { path: 'device-detail', component: DeviceDetailComponent },
  { path: 'add-device', component: AddDeviceComponent },
  { path: 'manufacturer', component: ManufacturerComponent },
  { path: 'type', component: TypeComponent },
  { path: 'subnetmask', component: SubnetmaskComponent },
  { path: 'command', component: CommandComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' as const }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
});
