import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/credentials';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSuccessLogin = true;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public auth() {
    let credentials: Credentials = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.loginService.getAuth(credentials).subscribe(
      value => {
        console.log(value)
        localStorage.setItem('token', value.token);
        localStorage.setItem('user_id', value.user_id.toString());
        console.log(localStorage);
        this.router.navigate(['/account'])
      },
      error => {
        console.log(error);
        this.isSuccessLogin = false;
      }
    );

  }

}
