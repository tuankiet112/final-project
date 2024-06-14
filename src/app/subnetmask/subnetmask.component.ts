import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subnetmask',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './subnetmask.component.html',
  styleUrl: './subnetmask.component.scss'
})
export class SubnetmaskComponent {
  devices: any[] = [
    { name: 'Internal Network1', ip: '192.168.1.0', sub: '255.255.255.0', mota: 'Mạng nội bộ', date: '01-01-2024', manage: 'Kietletuan' },
    { name: 'Guest Network1', ip: '192.168.2.0', sub: '255.255.255.0', mota: 'Mạng cho khách hàng', date: '01-11-2024', manage: 'Kietletuan' },
    { name: 'Internal Network1', ip: '192.168.1.0', sub: '255.255.255.0', mota: 'Mạng nội bộ', date: '01-01-2024', manage: 'Kietletuan' },
    { name: 'Guest Network1', ip: '192.168.2.0', sub: '255.255.255.0', mota: 'Mạng cho khách hàng', date: '01-11-2024', manage: 'Kietletuan' },
    { name: 'Internal Network1', ip: '192.168.1.0', sub: '255.255.255.0', mota: 'Mạng nội bộ', date: '01-01-2024', manage: 'Kietletuan' },
    { name: 'Guest Network1', ip: '192.168.2.0', sub: '255.255.255.0', mota: 'Mạng cho khách hàng', date: '01-11-2024', manage: 'Kietletuan' },
    { name: 'Internal Network1', ip: '192.168.1.0', sub: '255.255.255.0', mota: 'Mạng nội bộ', date: '01-01-2024', manage: 'Kietletuan' },
    { name: 'Guest Network1', ip: '192.168.2.0', sub: '255.255.255.0', mota: 'Mạng cho khách hàng', date: '01-11-2024', manage: 'Kietletuan' },

  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addDevice() {
    // Logic để thêm thiết bị
  }

  editDevice() {
    // Logic để sửa thiết bị
  }

  deleteDevice() {
    // Logic để xóa thiết bị
  }

  save() {
    // Logic để lưu thiết bị
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

