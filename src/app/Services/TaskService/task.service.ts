import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/Models/task';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';

const API_TASK_AUTHOR = "http://127.0.0.1:8000/api/task-list-author/"
const API_TASK_WORKER = "http://127.0.0.1:8000/api/task-list-worker/"
const API_TASK_DELETE = "http://127.0.0.1:8000/api/task-delete/"
const API_TASK_LIST_WORKERS = "http://127.0.0.1:8000/api/profile-list-team/"
const API_CREATE_NEW_TASK = "http://127.0.0.1:8000/api/task-create/"



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public getAuthorTask(id: string | null) : Observable<Task[]>{
    return this.http.get<Task[]>(API_TASK_AUTHOR + id)
  }

  public getWorkerTask(id: string | null): Observable<Task[]>{
    return this.http.get<Task[]>(API_TASK_WORKER + id)
  }

  public deleteTaskByAuthor(id: string | null): Observable<Task>{
    return this.http.delete<Task>(API_TASK_DELETE + id + "/")
  }
  
  public getListOfWorkers(name: string | null): Observable<User[]>{
    return this.http.get<User[]>(API_TASK_LIST_WORKERS + name)
  }

  public createNewTask(title: string, author_id: number, worker_id: number, description: string, url: string, status: string): Observable<Task> {
    return this.http.post<Task>(API_CREATE_NEW_TASK, {
      title: title,
      author: author_id,
      worker: worker_id,
      description: description,
      url:url,
      status: status
    })
  }




}
