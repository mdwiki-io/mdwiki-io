import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';

  @Output() loggedIn = new EventEmitter<void>();

  constructor(public auth: AuthService) {}

  createAdmin() {
    if (this.newUsername && this.newPassword) {
      this.auth.createAdmin(this.newUsername, this.newPassword);
      this.loggedIn.emit();
    }
  }

  login() {
    if (this.auth.login(this.username, this.password)) {
      this.loggedIn.emit();
    } else {
      alert('Invalid credentials');
    }
  }
}
