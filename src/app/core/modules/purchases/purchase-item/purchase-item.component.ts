import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CartService } from 'src/app/core/services/models/cart.service';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  @Input() item: Product = {} as Product;
  @Input() i: number = 0;
  public cart: Cart = {} as Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartService.Cart.subscribe({
      next: (cart) => {
        console.log('header-cart', cart);
        this.cart = cart;
      }


    });

  }
}
