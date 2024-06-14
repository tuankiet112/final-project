import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  users = [
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' },
    { name: 'admin', email: 'admin@example.com', role: 'Quản trị viên', status: 'Hoạt động', createdDate: '01-01-2024', notes: '...' }
  ];

  navigateTo(route: string): void {
    // Thêm logic điều hướng ở đây
  }

  logout(): void {
    // Thêm logic đăng xuất ở đây
  }

  addUser(): void {
    // Thêm logic thêm người dùng ở đây
  }

  editUser(): void {
    // Thêm logic sửa người dùng ở đây
  }

  deleteUser(): void {
    // Thêm logic xóa người dùng ở đây
  }

  save(): void {
    // Thêm logic lưu người dùng ở đây
  }
}
