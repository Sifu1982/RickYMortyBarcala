import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'u' && password === '12') {
      localStorage.setItem('token', 'token_de_autenticacion');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
