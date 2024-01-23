import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { CustomerService } from 'src/app/core/services/models/customer.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import { UserService } from 'src/app/core/services/models/user.service';

@Component({
  selector: 'app-profile-personal-form',
  templateUrl: './profile-personal-form.component.html',
  styleUrls: ['./profile-personal-form.component.css']
})
export class ProfilePersonalFormComponent implements OnInit {
  userData: User = { id: 0, rol: { id: 0, name: 'none' } } as User;
  isUpdated: boolean = false;
  message: string = '';
  customerForm = this.fb.group({
    id: ['', [Validators.required]],
    name:['', [Validators.required, Validators.minLength(2)]],
    lastname:['', [Validators.required, Validators.minLength(2)]],
    phone:['',[Validators.required, Validators.minLength(10)]],
  })


  constructor(
    private customerService: CustomerService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    ){}

  ngOnInit(){
    let temp: any = sessionStorage.getItem('user');
    this.userData = JSON.parse(temp);
    console.log(this.userData);
    this.userService.getById(this.userData.id).subscribe({
      next: resp=>{
        console.log(resp);
        this.userData = resp;
        this.setId(this.userData.id);
        this.setName(this.userData.name);
        this.setLastname(this.userData.lastname);
        this.setPhone(this.userData.phone);
      }
    })
  }


get id(){
  return this.customerForm.controls.id
}

setId(id: number){
  this.customerForm.controls.id.setValue(id.toString());
}
  get name(){
    return this.customerForm.controls.name;
  }
  setName(name: string){
    this.customerForm.controls.name.setValue(name);
  }
  get lastname(){
    return this.customerForm.controls.lastname;
  }
  setLastname(lastname: string){
    this.customerForm.controls.lastname.setValue(lastname);
  }
  get phone(){
    return this.customerForm.controls.phone;
  }
  setPhone(phone: string){
    this.customerForm.controls.phone.setValue(phone);
  }

  update(){
    console.log('isValid',this.customerForm.valid);
    if (this.customerForm.valid){
      this.customerService.saveOrUpdate(this.customerForm.value as Customer).subscribe({
        next: resp=>{
          this.isUpdated = true;
          this.message = resp.message;
          console.log(resp);
          this.setName(resp.customer.name);
          this.setLastname(resp.customer.lastname);
          this.setPhone(resp.customer.phone);
        }
      })
    }
  }

}
