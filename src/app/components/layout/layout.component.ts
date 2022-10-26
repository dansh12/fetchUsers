import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { AllInfoComponent } from '../all-info/all-info.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userInfo = this.userInfoService.getUsers();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  selected = 'name';
  search = '';
  innerWidth: any;
  userInfoSorted: any[];
  constructor(private userInfoService: UserInfoService, private dialog: MatDialog) {
    this.userInfoSorted = this.userInfo.slice();
   }
  
  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 420) {
      this.displayedColumns = ['id', 'name'];
    } else if (this.innerWidth < 580) {
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
    if (this.innerWidth < 420) {
      this.displayedColumns = ['id', 'name'];
    } else if (this.innerWidth < 580) {
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

  sortData(sort: Sort) {
    const data = this.userInfo.slice();
    if (!sort.active || sort.direction === '') {
      this.userInfoSorted = data;
      return;
    }

    this.userInfoSorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'username':
          return compare(a.username, b.username, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'phone':
          return compare(a.phone, b.phone, isAsc);
        case 'website':
          return compare(a.website, b.website, isAsc);
        default:
          return 0;
      }
    });
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
