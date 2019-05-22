import { Component, OnInit } from '@angular/core';
import { Appservice } from '../app.service';


@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css']
})
export class PatientDisplayComponent implements OnInit {

  constructor(public appservice: Appservice) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.appservice.readEhr();

  }

}
