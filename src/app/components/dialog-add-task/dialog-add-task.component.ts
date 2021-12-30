import { Component, OnInit } from '@angular/core';
import { DialogTaskService } from 'src/app/Services/DialogTaskService/dialog-task.service';
import { UserService } from 'src/app/Services/UserService/user.service';
import { TaskService } from 'src/app/Services/TaskService/task.service';
@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.css']
})
export class DialogAddTaskComponent implements OnInit {

  constructor(public dialogTaskService: DialogTaskService,private userService: UserService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.dialogTaskService.getDetailAuthor();
 }

  // get title() {
  //   return this.dialogTaskService.taskForm.get('title')
  // }

  // get author() {
  //   return this.dialogTaskService.taskForm.get('author')
  // }

  // get worker() {
  //   return this.dialogTaskService.taskForm.get('worker')
  // }

  // get description() {
  //   return this.dialogTaskService.taskForm.get('descrption')
  // }

  // get url() {
  //   return this.dialogTaskService.taskForm.get('url')
  // }

  // get status() {
  //   return this.dialogTaskService.taskForm.get('status')
  // }

  // newTask() {
  //  console.log(this.title);
  // }


  }
