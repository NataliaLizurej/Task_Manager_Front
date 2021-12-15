import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/Models/token';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

const API_URL_PROFILE = "http://localhost:8000/api/profile-detail/"


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public getUserDetail(user_id: string | null) : Observable<User> {
    return this.http.get<User>(API_URL_PROFILE + user_id)
  }


}
