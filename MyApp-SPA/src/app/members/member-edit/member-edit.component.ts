import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { ProfileUser } from 'src/app/_models/ProfileUser';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm', {static: false} ) editForm: NgForm;
  user: ProfileUser;

  constructor(private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateProfile() {
    console.log(this.user);
    this.alertify.success('Profile updated successfully');
    this.editForm.reset(this.user);
  }
}
