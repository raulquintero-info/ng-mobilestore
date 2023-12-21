import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  errorMessage: string = '';
  showError: boolean = false;

  loginForm = this.fb.group({
    name:['', [Validators.required]],
    lastname:['', [Validators.required]],
    email:['@server.com', [Validators.required, Validators.email]],
    password:['',Validators.required]
,  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private favoritesService: FavoritesService){

  }

  get name(){
    return this.loginForm.controls.name;
  }
  get lastname(){
    return this.loginForm.controls.lastname;
  }
  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login(){}


}
