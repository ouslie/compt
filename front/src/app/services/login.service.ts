import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Injectable()
export class LoginService {

  private baseUrl = 'http://localhost:8888/api';
  constructor(private http:HttpClient) { }


  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data.value);
  }

}
