import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-command',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent {
  commands: any[] = [
    { name: 'Restart Router', description: 'Khởi động lại router', type: 'Lệnh cấu hình', execute: 'reboot', date: '01-01-2024', creator: 'Kietlt' },
    { name: 'Check Disk', description: 'Kiểm tra dung lượng ổ cứng', type: 'Lệnh kiểm tra', execute: 'df -h', date: '01-01-2024', creator: 'Kietlt' },
    { name: 'Restart Router', description: 'Khởi động lại router', type: 'Lệnh cấu hình', execute: 'reboot', date: '01-01-2024', creator: 'Kietlt' },
    { name: 'Check Disk', description: 'Kiểm tra dung lượng ổ cứng', type: 'Lệnh kiểm tra', execute: 'df -h', date: '01-01-2024', creator: 'Kietlt' }
  ];

  constructor(private router: Router) {}

  addCommand() {
    // Logic để thêm lệnh
  }

  editCommand() {
    // Logic để sửa lệnh
  }

  deleteCommand() {
    // Logic để xóa lệnh
  }

  save() {
    // Logic để lưu lệnh
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
