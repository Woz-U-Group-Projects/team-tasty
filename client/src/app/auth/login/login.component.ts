<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    this.userService.loginUser(this.user).subscribe(
      () => {
        this.userService.getProfile().subscribe(() => {
          // set the user to logged in
          this.userService.loggedIn = true;
          // send to the profile page
          this.router.navigate(['/profile']);
        });
      },
      err => {
        console.log('unauthorized');
        console.log(err.status);
        console.log(err);
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
>>>>>>> origin/ashley
      }
    );
  }

<<<<<<< HEAD
  ngOnInit() { }
=======
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

    ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
>>>>>>> origin/ashley
}
