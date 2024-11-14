import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/variables';
import { LoginResponse } from '../../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login({ username, password }: { username: string; password: string }) {
    return this.httpClient.post<LoginResponse>(`${API_URL}/token`, {
      identification: username,
      password: password,
    });
  }
}
