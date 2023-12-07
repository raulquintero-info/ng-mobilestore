import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/services/login/login.service';
import { User } from './core/services/login/User.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-store';
  userLoginOn: boolean = false;
  userData: User = { id: 0, rol: { id: 0, name: 'none' } } as User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginService.checkStatus();

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData
      }
    })
  }
}
