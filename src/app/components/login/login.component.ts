import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Credentials } from 'src/app/Models/credentials';
import { LoginService } from 'src/app/Services/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService) { }

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
        let token = value.token;
        localStorage.setItem('token', token);
        console.log(localStorage);
        window.location.href = "http://localhost:4200/account"
      },
      error => {
        console.log(error);
      }
    );

  }

}
