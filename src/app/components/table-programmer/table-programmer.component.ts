import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { UserService } from 'src/app/Services/UserService/user.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from 'src/app/Services/TaskService/task.service';
import { Task } from 'src/app/Models/task';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-table-programmer',
  templateUrl: './table-programmer.component.html',
  styleUrls: ['./table-programmer.component.css']
})
export class TableProgrammerComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService, private taskService: TaskService, public dialog: MatDialog) { }

  
team: any;
data: any;
displayedColumns = ['title','author','worker','description','url','status','actions'];

@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.detailIdProfile();
    this.getTeam();
  }


  
public detailIdProfile() {
  this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
    value => {
      this.tasksWorker(value.id);
    },
    error => {
      console.log(console.error);
    }
  )
}

public tasksWorker(id_profile: number) {
  this.taskService.getWorkerTask(id_profile.toString()).subscribe(
    value => {
      this.data = new MatTableDataSource<Task>(value);
      this.data.paginator = this.paginator;
      console.log(this.data)
    },
    error => {
      console.log(console.error);
    }
  )
}

  getTeam() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        this.team = value.team
        console.log(this.team);
      },
      error => {
        console.log(console.error);
      }
    )
  }

}
