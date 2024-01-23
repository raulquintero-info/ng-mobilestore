import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginRequest } from 'src/app/core/services/login/loginRequest.interface';
import { UserService } from 'src/app/core/services/models/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  showError: boolean = false;
  public favoriteProducts: Product[] = [];
  public products: Product[] = [];

  loginForm = this.fb.group({
    username:['customer@server.com', [Validators.required, Validators.email]],
    password:['',Validators.required]
,  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService){

  }

  ngOnInit(): void {


  }

  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    this.showError = false;

    if (this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
          if(userData.rol.name == 'admin') this.router.navigateByUrl('/dashboard');
            else this.router.navigateByUrl('/');
        },
        error: error => {
          console.log(error);
          this.errorMessage =   error;
          this.showError = true;
        },
        complete: ()=>{
          console.log('login completo');

          this.loginForm.reset();
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
      alert('something wrong')
    }

  }
}
