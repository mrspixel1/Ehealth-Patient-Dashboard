import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class Appservice {


  constructor(private http: HttpClient, private router: Router) {}

  readEhr() {
    this.http.get('http://localhost:3000/api/user/readEhr')
    .subscribe(response => {
      console.log(response);
    });
  }
}
