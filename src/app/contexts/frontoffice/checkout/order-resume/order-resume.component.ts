import { Component } from '@angular/core';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.css']
})
export class OrderResumeComponent {
  purchases = [{id: 1, date: '2023/12/21', total: 1500, deliveryDate: '2023/12/20', shippingType:{ id: 1, shippingType: 'recoger en tienda'}}];

}
