import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/interfaces/order.interface';
import { Orderstatus } from 'src/app/core/interfaces/orderstatus.interface';
import { OrderService } from 'src/app/core/services/models/order.service';
import { OrderStatusService } from 'src/app/core/services/models/orderstatus.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit{
  orders: Order []  = [];
  order: Order = {} as Order;
  orderStatus: Orderstatus[] = [];
  params: any;
  constructor(
    private orderstatusService: OrderStatusService,
    private orderService: OrderService,
    private route: ActivatedRoute,){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.getOrderById(this.params.params.id);
    // this.getOrderById(2);
    this.getAllOrderStatus();
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

  getOrderById(id: number){
    this.orderService.getById(id)
    .subscribe({
      next: resp => { console.log('order', resp);this.order = resp; },
      error: resp=> { console.log('error', resp); }
    });
  }

  getAllOrderStatus() {
    this.orderstatusService.getAll().subscribe({
      next: (resp) => { console.log('orderStatus',resp); this.orderStatus = resp; },
      error: error => {
        console.log(error);
        // this.errorMessage = 'Ha habido un problema, intentelo mas tarde';
        // this.showError = true;
        console.log(error)
      }
    });
  }

}
