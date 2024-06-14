import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class DeviceListComponent implements OnInit {
  selectedDevice: any;
  devices: any[] = [];
  paginatedDevices: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.devices = this.getDummyDevices();
    this.updatePagination();
  }

  getDummyDevices() {
    const devices = [];
    for (let i = 1; i <= 100; i++) {
      devices.push({
        name:`Thiết bị ${i}`,
        manufacturer: `Manufacturer ${i}`,
        type: `GH ${i}`,
        command: `lenh ${i}`,
        subnetmask: '192.168.1.1/24',
        code: `A0${i}`,
        ip: '192.168.1.0',
        status: i % 2 === 0 ? 'Online' : 'Offline',
        selected: false
      });
    }
    return devices;
  }

  updatePagination() {
    this.totalPages = Array(Math.ceil(this.devices.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
    this.paginateDevices();
  }

  paginateDevices() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDevices = this.devices.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.paginateDevices();
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.paginatedDevices.forEach(device => (device.selected = isChecked));
  }

  addDevice() {
    this.router.navigate(['/add-device']);
  }

  editDevice(device: any) {
    this.router.navigate(['/add-device'], { state: { device, action: 'edit' } });
  }

  deleteDevice(device: any) {
    this.router.navigate(['/device-detail'], { state: { device, action: 'delete' } });
  }

  confirmDelete(device: any) {
    if (confirm(`Bạn có chắc chắn muốn xóa thiết bị ${device.name}?`)) {
      this.deleteDevice(device);
    }
  }
  viewDevice(device: any) {
    this.router.navigate(['/device-detail'], { state: { device } });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
