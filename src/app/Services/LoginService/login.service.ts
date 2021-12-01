import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/Models/credentials';
import { Token } from 'src/app/Models/token';

const API_URL_TOKEN = "http://127.0.0.1:8000/api-token-auth/"
const API_URL_LOGOUT = "http://127.0.0.1:8000/api/logout/"



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getAuth(credentials: Credentials) : Observable<Token> {
    return this.http.post<Token>(API_URL_TOKEN, credentials);
  }

  public loggedIn() {
    return !!localStorage.getItem('token')
  }

  public getLogout() {
    localStorage.removeItem('token');
    window.location.href = "http://localhost:4200/home"
  }

}
