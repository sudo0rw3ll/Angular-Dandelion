import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private token: string;

  constructor() {
    this.token = '';
  }

  getToken(): string {
    return localStorage.getItem('userToken')!;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('userToken', token);
  }
}
