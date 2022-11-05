import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  users_array: any[] = [];
  constructor(private http: HttpClient) {}

  setUsers( users: any[]){
    this.users_array = users;
  }

  pushUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(tap(users=>{
      this.setUsers(users);
    }));
  }

  getUsers() {
    return this.users_array;
  }
}
