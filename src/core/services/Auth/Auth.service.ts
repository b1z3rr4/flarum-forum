import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../interfaces/api';
import { API_URL } from '../../constants/variables';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  auth({ username, password }: { username: string; password: string }) {
    return this.httpClient.post<LoginResponse>(`${API_URL}/token`, {
      identification: username,
      password: password,
    });
  }
}
