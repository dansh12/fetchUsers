import { Component, OnInit, SimpleChange } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserInfoService } from './services/user-info/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDataLoaded = false;
  constructor(private userInfoService: UserInfoService, private router: Router){}

  ngOnChange(changes:SimpleChange){
    console.log("onChange1");
    if(!changes){
      this.userInfoService.pushUsers();
      console.log("onChange");
    }else{

    }
  }

 async ngOnInit(){
    await this.userInfoService.pushUsers();
    this.isDataLoaded = true;
    this.router.navigateByUrl('/table-layout-component');
    console.log("onInIt");
  }
  

  

  title = 'fetchUsers';
  isTable = true;
}
