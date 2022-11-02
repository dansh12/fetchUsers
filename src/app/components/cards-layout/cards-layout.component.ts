import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-cards-layout',
  templateUrl: './cards-layout.component.html',
  styleUrls: ['./cards-layout.component.scss']
})
export class CardsLayoutComponent implements OnInit {
  userInfo = this.userInfoService.getUsers();
  search = '';
  constructor(private userInfoService: UserInfoService,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAllInfo(id: number) {
    this.dialog.open(UserDetailsComponent, { width: '450px', data: { user: this.userInfo[this.userInfo.findIndex((user:any) => { return user.id == id })] } });
  }
}
