import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService, public router: Router, public loginService: LoginService) { }

  declare id: any;
  declare username: any;
  declare role: any;
  declare team: any;

  declare x: string;

  ngOnInit(): void {
    this.detail();
  }


  public detail() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        this.id = value.id
        this.username = value.username
        this.role = value.role
        this.team = value.team
        console.log(value);
      },
      error => {
        console.log(console.error);
      }
    )
  }

}
