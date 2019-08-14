import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { ProfileUser } from 'src/app/_models/ProfileUser';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm', {static: false} ) editForm: NgForm;
  user: ProfileUser;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private authService: AuthService,
              private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateProfile() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(
      () => {
        this.alertify.success('Profile updated successfully');
        this.editForm.reset(this.user);
      }, error => {
        this.alertify.error(error);
      }
    );
  }
}
