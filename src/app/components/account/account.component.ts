import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/LoginService/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService, public router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }

  public detail() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(console.error);
      }
    )
  }

}
