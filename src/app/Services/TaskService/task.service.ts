import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/Models/task';
import { Observable } from 'rxjs';


const API_TASK_AUTHOR = "http://127.0.0.1:8000/api/task-list-author/"


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public getAuthorTask(id: string | null) : Observable<Task[]>{
    return this.http.get<Task[]>(API_TASK_AUTHOR + id)
  }



}
