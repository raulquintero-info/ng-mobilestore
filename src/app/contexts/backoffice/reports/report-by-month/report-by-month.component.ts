import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/models/order.service';
import { Order } from 'src/app/core/interfaces/order.interface';

@Component({
  selector: 'app-report-by-month',
  templateUrl: './report-by-month.component.html',
  styleUrls: ['./report-by-month.component.css']
})
export class ReportByMonthComponent implements OnInit{
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
