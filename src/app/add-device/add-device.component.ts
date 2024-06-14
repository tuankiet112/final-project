import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AddDeviceComponent implements OnInit {
  devices: any[] = []; // Khai báo mảng devices
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.devices = this.getDummyDevices(); // Khởi tạo dữ liệu mẫu
    this.updatePagination();
  }

  getDummyDevices() {
    // Generate dummy devices for the demonstration
    const devices = [];
    for (let i = 1; i <= 10; i++) {
      devices.push({
        name: `Thiết bị mới ${i}`,
        code: `M0${i}`,
        manufacturer: 'NSX A',
        ip: '192.168.1.0',
        subnetmask: '255.255.255.0',
        command: 'Lenh1',
        selected: false
      });
    }
    return devices;
  }

  updatePagination() {
    this.totalPages = Array(Math.ceil(this.devices.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages.length) return;
    this.currentPage = page;
  }

  close() {
    this.router.navigate(['/device-list']);
  }
}
