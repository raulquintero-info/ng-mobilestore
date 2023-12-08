import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-shipping-type',
  templateUrl: './shipping-type.component.html',
  styleUrls: ['./shipping-type.component.css']
})
export class ShippingTypeComponent implements OnInit {
  textBtn = "Enviar Orden";
  cart: Cart = {} as Cart;

  constructor(private cartService: CartService){}
  ngOnInit(){
    this.cartService.Cart.subscribe({
      next: (cart) => {
        console.log('header-cart', cart);
        this.cart = cart;
      }
    })
    this.cartService.checkCartItems();
  }


  setPickup(typeId: number){
    this.cart.pickup = typeId;
    this.cartService.setCartitems(this.cart);
  }
}
