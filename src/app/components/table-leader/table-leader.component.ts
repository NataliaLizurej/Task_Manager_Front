import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from 'src/app/Services/TaskService/task.service';
import { UserService } from 'src/app/Services/UserService/user.service';
import { Task } from 'src/app/Models/task';


@Component({
  selector: 'app-table-leader',
  templateUrl: './table-leader.component.html',
  styleUrls: ['./table-leader.component.css']
})


export class TableLeaderComponent implements OnInit {

constructor(private userService: UserService, private taskService: TaskService) {}

data: Task[] = [];
displayedColumns = ['title','author','worker','description','url','status'];


ngOnInit(): void {
  this.detailIdProfile();
}

public detailIdProfile() {
  this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
    value => {
      this.tasksAuthor(value.id);
    },
    error => {
      console.log(console.error);
    }
  )
}



public tasksAuthor(id_profile: number) {
  this.taskService.getAuthorTask(id_profile.toString()).subscribe(
    value => {
      this.data = value
      console.log(this.data)
    },
    error => {
      console.log(console.error);
    }
  )
}


}
