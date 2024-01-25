import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/interfaces/order.interface';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  @Input() item: any;
  @Input() i: number = 0;
  product: Product = {} as Product;
  constructor() { }

  ngOnInit() {
    console.log('item', this.item);


  }
}
