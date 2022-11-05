import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoResolver implements Resolve<any[]> {
  constructor(private userInfo:UserInfoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.userInfo.pushUsers();
  }
}
