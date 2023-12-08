import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
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

}
