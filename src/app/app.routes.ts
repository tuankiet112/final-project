import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { TypeComponent } from './type/type.component';
import { SubnetmaskComponent } from './subnetmask/subnetmask.component';
import { CommandComponent } from './command/command.component';
import { AdminComponent } from './admin/admin.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chatbot', component:ChatbotComponent},
    { path: 'manufacturer', component: ManufacturerComponent },
    { path: 'type', component: TypeComponent },
    { path: 'subnetmask', component: SubnetmaskComponent },
    { path: 'command', component: CommandComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'device-list',component: DeviceListComponent},
    { path: 'device-detail',component: DeviceDetailComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders = [
    provideRouter(routes)
];
