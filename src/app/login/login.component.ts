import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;
  errorMsg = '';

  private apiUrl = 'http://localhost:3000/api'; // URL của API đăng nhập

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (this.username === '') {
      this.errorMsg = 'Bạn Chưa Nhập User Name !';
      return;
    } else if (this.password === '') {
      this.errorMsg = 'Bạn Chưa Nhập PassWord !';
      return;
    }

    this.http.post<any>(`${this.apiUrl}/login`, { email: this.username, password: this.password }).subscribe({
      next: (response) => {
        console.log(response); // Kiểm tra phản hồi
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']); // Chuyển hướng đến trang login
      },
      error: (err) => {
        console.error(err); // Kiểm tra chi tiết lỗi
        if (err.status === 401) {
          this.errorMsg = 'Tài Khoản Hoặc Mật Khẩu Không Đúng !';
        } else if (err.status === 403) {
          this.errorMsg = 'Tài khoản này đã bị vô hiệu hóa. Vui lòng liên hệ với tổng đài để được hỗ trợ !';
        } else {
          this.errorMsg = 'Đăng nhập không thành công!';
        }
      }
    });
  }
}
