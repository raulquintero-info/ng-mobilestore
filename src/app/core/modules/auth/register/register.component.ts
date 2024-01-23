import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginRequest } from 'src/app/core/services/login/loginRequest.interface';
import { CustomerService } from 'src/app/core/services/models/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isSavedSuccess: boolean = false
  errorMessage: string = '';
  showError: boolean = false;

  loginForm = this.fb.group({
    name:['', [Validators.required]],
    lastname:['', [Validators.required]],
    username:['@server.com', [Validators.required, Validators.email]],
    password:['',Validators.required]
,  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private customerService: CustomerService){

  }

  get name(){
    return this.loginForm.controls.name;
  }
  get lastname(){
    return this.loginForm.controls.lastname;
  }
  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  registrar(){

    if (this.loginForm.valid){
      this.customerService.saveOrUpdate(this.loginForm.value as Customer).subscribe({
        next: resp => {
          console.log(resp);
          let credentials: LoginRequest = {} as LoginRequest;
          // this.customer.id=resp.customer.id;
          this.errorMessage = resp.message;
          this.showError = true;
          this.isSavedSuccess = true;
          credentials.username = this.loginForm.value.username as string;
          credentials.password = this.loginForm.value.password as string;
          this.loginForm.reset();
          this.loginService.login(credentials).subscribe({
            next: (userData) => {
              console.log(userData);
              if(userData.rol.name == 'admin') this.router.navigateByUrl('/dashboard');
                else this.router.navigateByUrl('/');
            }
          });
        },
        error: error => { console.log(error);this.errorMessage = error.error.message; this.showError = true}
      });

    }

  }


}
