import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/core/interfaces/address.interface';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { AddressService } from 'src/app/core/services/models/address.service';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-shipping-type',
  templateUrl: './shipping-type.component.html',
  styleUrls: ['./shipping-type.component.css']
})
export class ShippingTypeComponent implements OnInit {
  textBtn = "Enviar Orden";
  cart: Cart = {} as Cart;
  addresses: Address[] = [];

  constructor(private cartService: CartService, private addressService: AddressService){}
  ngOnInit(){
    this.cartService.Cart.subscribe({
      next: (cart) => {
        console.log('header-cart', cart);
        this.cart = cart;
      }
    })
    this.cartService.checkCartItems();

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


  setPickup(typeId: number){
    this.cart.pickup = typeId;
    this.cartService.setCartitems(this.cart);
  }


  setAddress(address: Address){
    this.cart.address1 = address.address1;
    this.cart.address2 = address.address2;
    this.cart.city = address.city;
    this.cart.country = address.country;
    this.cart.zipCode = address.zipCode;
    this.cartService.setCartitems(this.cart);
  }


}
