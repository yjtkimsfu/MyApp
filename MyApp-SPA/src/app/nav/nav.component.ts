import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username = '';

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.decodedToken) {
      this.username = this.authService.decodedToken.unique_name;
    }
  }

  login() {
    this.authService.login(this.model).subscribe(
      () => {
        this.username = this.authService.decodedToken.unique_name;
        this.alertify.success('Logged in successfully');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.username = '';
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
