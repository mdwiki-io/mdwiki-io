import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminKey = 'mdwiki-admin';
  private loggedKey = 'mdwiki-loggedin';

  isAdminCreated(): boolean {
    return localStorage.getItem(this.adminKey) !== null;
  }

  createAdmin(username: string, password: string): void {
    const encoded = btoa(password);
    localStorage.setItem(this.adminKey, JSON.stringify({ username, password: encoded }));
    localStorage.setItem(this.loggedKey, 'true');
  }

  login(username: string, password: string): boolean {
    const adminRaw = localStorage.getItem(this.adminKey);
    if (!adminRaw) {
      return false;
    }
    try {
      const admin = JSON.parse(adminRaw);
      if (admin.username === username && admin.password === btoa(password)) {
        localStorage.setItem(this.loggedKey, 'true');
        return true;
      }
    } catch (_e) {}
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedKey) === 'true';
  }

  logout(): void {
    localStorage.removeItem(this.loggedKey);
  }
}
