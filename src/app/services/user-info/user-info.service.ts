
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  users = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());
  users_array:any[] =[];

  constructor() {
    
  }
   
   async pushUsers(){
    for (let user of await this.users){
      this.users_array.push(user);
    }
   }

   initializeUsers(){
    this.pushUsers();
    return this.users;
   }
   
  getUsers() {
    return this.users_array;
  }


}
