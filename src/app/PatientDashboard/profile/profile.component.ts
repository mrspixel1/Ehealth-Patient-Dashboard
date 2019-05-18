import { Component, OnInit } from '@angular/core';
import { format } from 'path';
declare const swal: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor() {}

  ngOnInit() {
    this.firstName = 'Alec';
    this.lastName = 'Thompson';
  }

  success() {
    swal({
      title: 'updated!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }

}
