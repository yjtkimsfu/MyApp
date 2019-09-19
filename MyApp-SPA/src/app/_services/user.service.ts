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

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersControlUrl + id);
  }

  getProfile(id: number): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(this.usersControlUrl + 'profile/' + id);
  }

  updateUser(id: number, user: ProfileUser) {
    return this.http.put(this.usersControlUrl + id, user);
  }

  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.usersControlUrl + userId + '/photos/' + id + '/setMain', {});
  }
}
