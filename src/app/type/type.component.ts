import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  devices: any[] = [
    { code: 'MA01', name: 'TB01', country: 'VN', brand: 'Brand1', group: 'Group1', type: 'Type1' },
    { code: 'MA02', name: 'TB02', country: 'VN', brand: 'Brand2', group: 'Group2', type: 'Type2' },
    // Add more sample devices here
  ];

  constructor(private router: Router) {}

  addDevice() {
    // Logic to add a device
  }

  editDevice() {
    // Logic to edit a device
  }

  deleteDevice() {
    // Logic to delete a device
  }

  save() {
    // Logic to save the device
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
