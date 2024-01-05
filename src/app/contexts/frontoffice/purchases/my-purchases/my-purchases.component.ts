import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/interfaces/order.interface';
import { OrderService } from 'src/app/core/services/models/order.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.css']
})
export class MyPurchasesComponent  implements OnInit{
  orders: Order [] = [];

  constructor(private orderService: OrderService){}

  ngOnInit(){
    this.getOrders(1);
  }

  getOrders(page: number){
    page = Number(page);
    this.orderService.getByUserId()
    .subscribe({
      next: (response) => {
        console.log('orders: ', response);
        this.orders = response;
      },
      error: error=>{
        console.log('error: ', error);
      }
    }
    )};
}
