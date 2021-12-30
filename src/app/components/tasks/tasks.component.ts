import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private userService: UserService, private loginService: LoginService) { }

  declare role: any;

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        this.role = value.role;
        console.log(this.role);
      },
      error => {
        console.log(console.error);
      }
    )
  }

  // If role = Team Leader return True
  isTeamLeader() {
    if(this.role == "Team Leader") {
      return true;
    } else {
      return false;
    }
  }

}
