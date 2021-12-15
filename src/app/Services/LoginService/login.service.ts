import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/Models/credentials';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';


const API_URL_TOKEN = "http://127.0.0.1:8000/api-token-auth/"
const API_URL_LOGOUT = "http://127.0.0.1:8000/api/logout/"



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  public getAuth(credentials: Credentials) : Observable<Token> {
    return this.http.post<Token>(API_URL_TOKEN, credentials);
  }


  public loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }


  public getLogout() {
    let token: string | null = localStorage.getItem("token");
    console.log(token);
    this.removeToken(token).subscribe(
      value => {
        console.log(value);
      }, 
      error => {
        console.log(error);
      }
    );
  
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.router.navigate(['/home']);
  }

  public removeToken(token: string | null) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Token " + token);
    console.log(headers);
    return this.http.delete(API_URL_LOGOUT, {headers: headers});
  }





}
