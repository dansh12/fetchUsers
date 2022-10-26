import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrls: ['./all-info.component.scss']
})
export class AllInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AllInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
