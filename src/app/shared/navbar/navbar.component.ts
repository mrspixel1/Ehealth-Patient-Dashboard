import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/page/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() title: string;
  _router: Router;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  public name: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.name = 'mustapha';
      console.log(name);
    });

  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  menuClick() {
    // document.getElementById('main-panel').style.marginRight = '260px';
  }

  onLogout(){

  }


}
