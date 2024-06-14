import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { TypeComponent } from './type/type.component';
import { SubnetmaskComponent } from './subnetmask/subnetmask.component';
import { CommandComponent } from './command/command.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'chatbot', component:ChatbotComponent},
  { path: 'device-list', component: DeviceListComponent },
  { path: 'add-device', component: AddDeviceComponent },
  { path: 'device-detail', component: DeviceDetailComponent },
  { path: 'manufacturer', component: ManufacturerComponent },
  { path: 'type', component: TypeComponent },
  { path: 'subnetmask', component: SubnetmaskComponent },
  { path: 'command', component: CommandComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
