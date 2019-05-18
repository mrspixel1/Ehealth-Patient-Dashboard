import { Component, OnInit } from '@angular/core';
declare const swal: any;

@Component({
  selector: 'app-patient-insert',
  templateUrl: './patient-insert.component.html',
  styleUrls: ['./patient-insert.component.css']
})
export class PatientInsertComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  success() {
    swal({
      title: 'updated!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }

}
