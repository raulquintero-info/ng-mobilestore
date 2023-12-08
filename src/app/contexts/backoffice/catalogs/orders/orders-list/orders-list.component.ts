import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders = [{id: 1, date: '2023/12/12', total: 1500, shippingType:{ id: 1, shippingType: 'recoger en tienda'}}];



}
