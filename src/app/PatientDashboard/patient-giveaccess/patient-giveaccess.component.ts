import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
declare const swal: any;


export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-patient-giveaccess',
  templateUrl: './patient-giveaccess.component.html',
  styleUrls: ['./patient-giveaccess.component.css']
})


export class PatientGiveaccessComponent implements OnInit {

  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'READ', sound: 'Give only read access'},
    {name: 'WRITE', sound: 'Give only write access'},
    {name: 'READ/WRITE', sound: 'Give both access'},
  ];
  selectedValue: string;
  constructor() {


   }

  ngOnInit() {
  }

  onchange(a){
    console.log(a);
  }
  confirm() {
    swal({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'YES'
    }).then(function () {
      swal({
        title: 'ACCESS GIVEN!',
        text: 'you have given access to your health record',
        type: 'success',
        confirmButtonClass: 'btn btn-info'
      });
    });
  }

}
