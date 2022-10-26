import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { AllInfoComponent } from '../all-info/all-info.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private userInfoService: UserInfoService, private dialog: MatDialog) { }
  userInfo = this.userInfoService.getUsers();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  selected = 'name';
  search = '';
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 580) {
      this.displayedColumns = ['id', 'name', 'email'];
    } else if (this.innerWidth < 760) {
      this.displayedColumns = ['id', 'name', 'username', 'email'];
    } else if (this.innerWidth < 820) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
    } else {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'website'];
    }

  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 580) {
      this.displayedColumns = ['id', 'name', 'email'];
    } else if (this.innerWidth < 760) {
      this.displayedColumns = ['id', 'name', 'username', 'email'];
    } else if (this.innerWidth < 820) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
    } else {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'website'];
    }
  }

  openAllInfo(id: number) {
    this.dialog.open(AllInfoComponent, { width: '450px', data: { user: this.userInfo[this.userInfo.findIndex(user => { return user.id == id })] } });
  }

}
