import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private username: string = '';

  constructor() {}

  public login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.loggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.username = '';
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
