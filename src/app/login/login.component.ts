import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  badCredentials: boolean = false;

  constructor( private userService: UserService, 
    private userAuthService: UserAuthService,
    private router: Router){}

  ngOnInit(): void {}

  login(loginForm:NgForm) {

    this.userService.login(loginForm.value).subscribe(
      {
        next: (response:any) => {
          this.userAuthService.setToken(response.accessToken);
          this.badCredentials = false;
          this.router.navigate(["/admin"]);
        },
        error: (error) => {
          console.log(error);
          this.badCredentials = true;
        },
      }
    );

  }
}
