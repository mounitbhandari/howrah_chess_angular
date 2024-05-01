import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = environment.BASE_API_URL;

  constructor(private http: HttpClient) { }

  login(loginData : any){
    return this.http.post(this.api_url + '/login', loginData);
  }
}
