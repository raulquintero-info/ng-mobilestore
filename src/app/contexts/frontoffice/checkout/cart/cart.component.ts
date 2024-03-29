import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;
  textBtn = "Continuar";

  constructor(private cartService: CartService) { }


  ngOnInit() {
    this.cartService.Cart.subscribe({
      next: (cart) => {
        console.log('cart', cart);
        this.cart = cart;
      }
    })
    this.cartService.checkCartItems();



  }





}
