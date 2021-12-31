import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';
import { UserService } from '../UserService/user.service';
import { TaskService } from '../TaskService/task.service';


@Injectable({
  providedIn: 'root'
})
export class DialogTaskService {

  constructor(private userService: UserService, private taskService: TaskService) { }


  declare username_author: any;
  declare team_author: any;
  declare id_profile_author: any;
  declare list_workers: any;
  declare t: any;
  declare a: any;
  declare w: any;
  declare d: any;
  declare u: any;
  declare s: any;

  

  taskForm: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    worker: new FormControl('',Validators.required),
    description: new FormControl(''),
    url: new FormControl(''),
    status: new FormControl('',Validators.required)
  })



  public getDetailAuthor() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        this.username_author = value.username
        this.team_author = value.team
        this.id_profile_author = value.id
        this.getListWorkers(this.team_author);
        console.log(this.username_author, this.team_author);
      },
      error => {
        console.log(console.error);
      }
    )
  }

  public getListWorkers(team: string) {
    this.taskService.getListOfWorkers(team).subscribe(
      value => {
        this.list_workers = value
        console.log(this.list_workers)
      },
      error => {
        console.log(console.error);
      }
    )
  }

  getDataTask() {
    return this.t = this.taskForm.get('title').value,
    this.a = this.taskForm.get('author').value,
    this.w = this.taskForm.get('worker').value.id,
    this.d = this.taskForm.get('description').value,
    this.u = this.taskForm.get('url').value,
    this.s = this.taskForm.get('status').value
  }

  newTask() {
   this.getDataTask();
   this.taskService.createNewTask(this.t, this.a, this.w, this.d, this.u, this.s).subscribe(
     value => {
       console.log(value);
       window.location.reload()
     },
     error => {
       console.log(console.error);
     }
   )
  }



}
