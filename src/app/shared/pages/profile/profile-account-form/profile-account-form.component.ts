import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';

@Component({
  selector: 'app-profile-account-form',
  templateUrl: './profile-account-form.component.html',
  styleUrls: ['./profile-account-form.component.css']
})
export class ProfileAccountFormComponent {
  loginForm = this.fb.group({
    name:['', [Validators.required, Validators.minLength(2)]],
    lastname:['',Validators.required],
    phone:['',[Validators.required, Validators.minLength(10)]]
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
  get phone(){
    return this.loginForm.controls.phone;
  }
}
