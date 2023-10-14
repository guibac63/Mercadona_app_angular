import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setToken(accessToken:string){
    localStorage.setItem("accessToken",accessToken);
  }

  public getToken():string | null {
    return localStorage.getItem("accessToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getToken();
  }

}
