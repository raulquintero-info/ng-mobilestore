import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  @Input() cart: Cart = {} as Cart;


}
