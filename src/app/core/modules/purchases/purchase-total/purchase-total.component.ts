import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';

@Component({
  selector: 'app-purchase-total',
  templateUrl: './purchase-total.component.html',
  styleUrls: ['./purchase-total.component.css']
})
export class PurchaseTotalComponent {
  @Input() cart: Cart = {} as Cart;

}
