import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/order.interface';

@Component({
  selector: 'app-purchase-total',
  templateUrl: './purchase-total.component.html',
  styleUrls: ['./purchase-total.component.css']
})
export class PurchaseTotalComponent {
  @Input() order: Order = {} as Order;

}
