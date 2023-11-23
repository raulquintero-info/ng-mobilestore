import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/services/login/login.service';
import { LoginResponse } from './core/services/login/loginResponse.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-store';
  userLoginOn: boolean = false;
  userData: LoginResponse = {id:0, rol:{id:0, name:'none'}} as LoginResponse;

constructor(private loginService: LoginService){}

ngOnInit(){
  console.log("rolName>>>> ",this.userData.rol.name)
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

}
