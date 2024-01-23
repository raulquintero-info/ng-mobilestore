import { Component } from '@angular/core';
import { Address } from 'src/app/core/interfaces/address.interface';
import { UserLogged } from 'src/app/core/interfaces/userLogged.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { AddressService } from 'src/app/core/services/models/address.service';
import { UserService } from 'src/app/core/services/models/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData: User = { id: 0, rol: { id: 0, name: 'none' } } as User;
  addresses: Address[] = [];
  userLogged: UserLogged = {} as UserLogged;


  constructor(private userService: UserService, private addressService: AddressService) {
    let temp: any = sessionStorage.getItem('user');
    this.userData = JSON.parse(temp);
    console.log('userData', this.userData)
  }

  ngOnInit() {


    this.userService.getById(this.userData.id).subscribe({
      next: (userData) => {
        this.userLogged = userData
        console.log('userLogged',this.userLogged);
      }
    })

    this.addressService.getByUserId(this.userData.id)
      .subscribe({
        next: resp => {
          console.log('adresses:', resp)
          this.addresses = resp;
        },
        error: error => {
          console.log('error', error);
        }
      })



  }



}
