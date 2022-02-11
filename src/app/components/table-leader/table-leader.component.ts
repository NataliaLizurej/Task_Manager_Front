import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from 'src/app/Services/TaskService/task.service';
import { UserService } from 'src/app/Services/UserService/user.service';
import { Task } from 'src/app/Models/task';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { DialogDeleteTaskComponent } from '../dialog-delete-task/dialog-delete-task.component';
import { DialogService } from 'src/app/Services/DialogService/dialog.service';
import { DialogUpdateService } from 'src/app/Services/DialogUpdateTask/dialog-update.service';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-table-leader',
  templateUrl: './table-leader.component.html',
  styleUrls: ['./table-leader.component.css']
})


export class TableLeaderComponent implements OnInit {

constructor(private userService: UserService, private taskService: TaskService, private loginService: LoginService, public dialog: MatDialog, private dialogService: DialogService, private dialogUpdateService: DialogUpdateService) {}

declare new_status: any;

team: any;
data: any;
displayedColumns = ['id','title','author','worker','description','url','status','actions'];

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;

 

ngOnInit(): void {
  this.detailIdProfile();
  this.getTeam();
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
      this.data = new MatTableDataSource<Task>(value);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
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


openAddTask() {
  this.dialog.open(DialogAddTaskComponent, {
    disableClose: true,
  });
}

public deleteTask(id_task: string) {
  this.dialogService.openDeleteTask('Are you sure to delete this task?').afterClosed().subscribe(
    value => {
      if(value) {
        this.taskService.deleteTaskByAuthor(id_task).subscribe(
          value => {
            console.log(value);
            window.location.reload()
          }
        )
      }
    }
  );
}


public updateTask(obj) {
  this.dialogUpdateService.openUpdateTask('Update status').afterClosed().subscribe(
    value => {
      if(value) {
        this.new_status = this.dialogUpdateService.getStatus()
        console.log(this.new_status)
        console.log(obj)
        this.taskService.updateThisTask(obj.id, obj.title, obj.author, obj.worker, obj.description, obj.url, this.new_status).subscribe(
          value => {
            console.log(value) 
            window.location.reload()
          }
        )
      }
    }
  )
}



}

