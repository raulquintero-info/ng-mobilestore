import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/interfaces/order.interface';
import { OrderService } from 'src/app/core/services/models/order.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  order: Order = {} as Order;
  params: any;
  constructor(private orderService: OrderService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.getOrderById(this.params.params.id);
  }

  getOrderById(id: number){
    this.orderService.getById(id)
    .subscribe({
      next: resp => { console.log('order', resp);this.order = resp; },
      error: resp=> { console.log('error', resp); }
    });
  }

}
