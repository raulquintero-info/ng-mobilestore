import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: Product = {} as Product;
  @Input() i: number = 0;
  public cart: Cart = {} as Cart;

  constructor(private cartService: CartService) { }


  ngOnInit() {

    this.cartService.Cart.subscribe({
      next: (cart) => {
        // console.log('header-cart', cart);
        this.cart = cart;
      }


    });

  }

  addItem(index: number) {
    this.cartService.addItem(this.cart.orderproducts[index]);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }


  remove(index: number = 0) {
    this.cartService.remove(index);
  }



}

