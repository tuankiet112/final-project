import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ChatbotComponent]
})
export class HomeComponent implements OnInit {
  devices: any[] = [];
  paginatedDevices: any[] = [];
  currentPage = 1;
  itemsPerPage = 15;
  totalPages: number[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices() {
    this.http.get<any[]>('assets/data/devices.json').subscribe((devices: any[]) => {
      this.devices = devices;
      this.updatePagination();
    });
  }

  updatePagination() {
    this.totalPages = Array(Math.ceil(this.devices.length / this.itemsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
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

  editDevice(device: any) {
    if (typeof window !== 'undefined') {
      this.router.navigate(['/device-list'], { state: { device, action: 'edit' } });
      console.log('Chỉnh sửa thiết bị:', device);
    }
  }

  confirmDelete(device: any) {
    if (typeof window !== 'undefined') {
      const confirmDelete = window.confirm('Bạn có muốn xóa thiết bị này không?');
      if (confirmDelete) {
        this.deleteDevice(device);
      }
    }
  }

  deleteDevice(device: any) {
    if (typeof window !== 'undefined') {
      this.router.navigate(['/device-list'], { state: { device, action: 'delete' } });
      console.log('Xóa thiết bị:', device);
    }
  }

  viewDevice(device: any) {
    if (typeof window !== 'undefined') {
      this.router.navigate(['/device-list'], { state: { device, action: 'view' } });
      console.log('Xem thiết bị:', device);
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  navigateTo(route: string): void {
    if (typeof window !== 'undefined') {
      this.router.navigate([route]);
    }
  }
}
