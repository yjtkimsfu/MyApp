import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ProfileUser } from '../_models/ProfileUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersControlUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersControlUrl);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.usersControlUrl + id);
  }

  getProfile(id): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(this.usersControlUrl + 'profile/' + id);
  }
}
