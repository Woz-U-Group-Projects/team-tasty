import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  // options allows us to flag that we are using credentials, which will allow the jtw cookie on all requests
  options = { withCredentials: true };

  // base url of the express back end
  url: string = 'http://localhost:3000/users/';

  // boolean value to hold the login status
  loggedIn: boolean = false;

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  // register a user, must .subscribe() to trigger
  // POST baserl/signup
  registerUser(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'signup', user, this.options);
  }

  // login a user, must .subscribe() to trigger
  // POST baseurl/login
  loginUser(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'login', user, this.options);
  }

  // get a user profile, must .subscribe() to trigger
  // GET baseurl/profile
  getProfile(): Observable<User> {
    return this.http.get<User>(this.url + 'profile', this.options);
  }

  // logout, must .subscribe() to trigger
  // GET baseurl/logout
  logout(): Observable<string> {
    return this.http.get<string>(this.url + 'logout', this.options);
  }

  // validate a token, must .subscribe() to trigger
  // GET baseurl/validateToken
  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(this.url + 'validateToken', this.options);
  }
}
