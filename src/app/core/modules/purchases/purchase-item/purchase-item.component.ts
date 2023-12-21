import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  @Input() item: Product = {} as Product;
  @Input() i: number = 0;

  constructor() { }

  ngOnInit() {



  }
}
