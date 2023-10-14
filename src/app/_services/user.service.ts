import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseUrl = environment.baseUrl;

  requestHeader = new HttpHeaders({
    'No-Auth': 'True',
    'Acces-Control-Allow-Origin': '*',
  });

  constructor(private httpclient: HttpClient) {}

  public login(logindata: any) {
    return this.httpclient.post(
      this.baseUrl + 'api/auth/login',
      logindata,
      { headers: this.requestHeader }
    );
  }
}
