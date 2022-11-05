import { Component, OnInit, SimpleChange } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserInfoService } from './services/user-info/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userInfoService: UserInfoService, private router: Router){}

 ngOnInit(){}
  

  

  title = 'fetchUsers';
  isTable = true;
}
