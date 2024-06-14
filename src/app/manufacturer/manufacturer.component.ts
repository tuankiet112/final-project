import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ManufacturerComponent implements OnInit {
  devices: any[] = [
    { code: 'MA01', name: 'TB01', country: 'VN', brand: 'Brand1', group: 'Group1', type: 'Type1' },
    { code: 'MA02', name: 'TB02', country: 'VN', brand: 'Brand2', group: 'Group2', type: 'Type2' },
    // Thêm các thiết bị mẫu khác vào đây
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
