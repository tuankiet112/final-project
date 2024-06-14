import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class DeviceDetailComponent implements OnInit {
  device: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = history.state;
    this.device = navigation.device || this.getEmptyDevice();
  }

  save() {
    // Logic lưu thiết bị
    console.log('Device saved:', this.device);
  }

  edit() {
    // Logic chỉnh sửa thiết bị
    console.log('Editing device:', this.device);
  }

  cancel() {
    this.router.navigate(['/device-list']);
  }

  goBack() {
    this.router.navigate(['/device-list']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  private getEmptyDevice() {
    return {
      code: '',
      name: '',
      manufacturer: '',
      type: '',
      command: '',
      subnetmask: '',
      status: '',
      configDetails: ''
    };
  }
}
