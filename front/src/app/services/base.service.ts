import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Injectable()
export class BaseService {

  constructor(private http:HttpClient) { }


  getBases() {
    return this.http.get('http://localhost:8888/api/bases').pipe();
  }

}
