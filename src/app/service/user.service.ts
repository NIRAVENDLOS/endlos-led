import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';

  CreateUserProfile(userProfile:any): Observable<any> {
    return this.http.post(`${this.url}/save`,userProfile);
  }

  ViewAllUserProfile(): Observable<any> {
    return this.http.get(`${this.url}/user/findall`);
  }

}
