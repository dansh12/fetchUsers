
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnInit {
  userInfo = this.userInfoService.getUsers();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  selected = 'name';
  search = '';
  innerWidth: any;
  userInfoSorted: any[];
  dataSource = new MatTableDataSource<any>(this.userInfo);
  constructor(private userInfoService: UserInfoService, private dialog: MatDialog) {
    this.userInfoSorted = this.userInfo.slice();
  }


  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 420) {
      this.displayedColumns = ['id', 'name'];
      document.getElementById('table')!.style.width = '300px';
    } else if (this.innerWidth < 580) {
      this.displayedColumns = ['id', 'name', 'email'];
      document.getElementById('table')!.style.width = '420px';
    } else if (this.innerWidth < 760) {
      this.displayedColumns = ['id', 'name', 'username', 'email'];
      document.getElementById('table')!.style.width = '580px';
    } else if (this.innerWidth < 820) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
      document.getElementById('table')!.style.width = '760px';
    } else if (this.innerWidth < 920) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
      document.getElementById('table')!.style.width = '800px';
    } else {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'website'];
      document.getElementById('table')!.style.width = '900px';
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 420) {
      this.displayedColumns = ['id', 'name'];
      document.getElementById('table')!.style.width = '300px';
    } else if (this.innerWidth < 580) {
      this.displayedColumns = ['id', 'name', 'email'];
      document.getElementById('table')!.style.width = '420px';
    } else if (this.innerWidth < 760) {
      this.displayedColumns = ['id', 'name', 'username', 'email'];
      document.getElementById('table')!.style.width = '580px';
    } else if (this.innerWidth < 820) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
      document.getElementById('table')!.style.width = '760px';
    } else if (this.innerWidth < 920) {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone'];
      document.getElementById('table')!.style.width = '800px';
    } else {
      this.displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'website'];
      document.getElementById('table')!.style.width = '900px';
    }
  }


  openAllInfo(id: number) {
    this.dialog.open(UserDetailsComponent, { width: '450px', data: { user: this.userInfo[this.userInfo.findIndex((user:any) => { return user.id == id })] } });
  }

  sortData(sort: Sort) {
    const data = this.userInfo.slice();
    if (!sort.active || sort.direction === '') {
      this.userInfoSorted = data;
      return;
    }

    this.userInfoSorted = data.sort((a: any, b: any) => {
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
  check() {
    console.log(this.userInfo);
  }
}
