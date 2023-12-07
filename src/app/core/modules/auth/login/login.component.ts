import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginRequest } from 'src/app/core/services/login/loginRequest.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = '';
  showError: boolean = false;

  loginForm = this.fb.group({
    email:['customer@server.com', [Validators.required, Validators.email]],
    password:['',Validators.required]
,  })

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService){

  }

  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login(){

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
