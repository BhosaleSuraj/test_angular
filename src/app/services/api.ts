import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test`);
  }
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

}
