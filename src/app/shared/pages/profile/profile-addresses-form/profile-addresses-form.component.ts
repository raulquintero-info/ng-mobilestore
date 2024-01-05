import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/core/interfaces/address.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AddressService } from 'src/app/core/services/models/address.service';

@Component({
  selector: 'app-profile-addresses-form',
  templateUrl: './profile-addresses-form.component.html',
  styleUrls: ['./profile-addresses-form.component.css']
})
export class ProfileAddressesFormComponent implements OnInit{
  addresses: Address[] = [];
  address: Address = {} as Address;
  userData: User = {} as User;

  constructor(private addressService: AddressService){}

  ngOnInit(){

    let temp: any = sessionStorage.getItem('user');
    this.userData = JSON.parse(temp);

    this.getAddresses();
  }
  getAddresses(){
    this.addressService.getByUserId()
      .subscribe({
        next: resp=>{
          console.log('adresses:', resp)
          this.addresses = resp;
        },
        error: error=>{
          console.log('error',error);
        }
      })
  }

  save(){
    let user=this.userData;
    this.address.user = user;
    console.log('address', this.address);
    this.addressService.saveOrUpdate(this.address)
    .subscribe({
      next: resp => {
        console.log(resp);
        this.getAddresses();
      }
    })
  }

  delete(id: number){
    this.addressService.deleteById(id)
    .subscribe({
      next: resp=>{
        console.log(resp);
        this.getAddresses();
      }
    })
  }



}
