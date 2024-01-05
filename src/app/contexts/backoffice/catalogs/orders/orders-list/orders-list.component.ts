import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../core/services/models/order.service';
import { Order } from 'src/app/core/interfaces/order.interface';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit{
  orders: Order [] = [];

  constructor(private orderService: OrderService){}

  ngOnInit(){
    this.getOrders(1);
  }

  getOrders(page: number){
    page = Number(page);
    this.orderService.getAll()
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
