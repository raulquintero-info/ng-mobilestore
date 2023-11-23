import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginResponse } from 'src/app/core/services/login/loginResponse.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  userLoginOn: boolean =false;
  userData: LoginResponse = {} as LoginResponse;

  constructor(private loginService: LoginService){}



  ngOnInit(){

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData
      }
    })

  }

  ngOnDestroy(){
    this.loginService.currentUserLoginOn.unsubscribe();
    this.loginService.currentUserData.unsubscribe();
  }

  logout(){}



}
