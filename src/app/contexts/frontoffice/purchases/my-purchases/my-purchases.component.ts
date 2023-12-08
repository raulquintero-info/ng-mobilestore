import { Component } from '@angular/core';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.css']
})
export class MyPurchasesComponent {
  purchases = [{id: 1, date: '23/02/2023', total: 1500, shippingType:{ id: 1, shippingType: 'recoger en tienda'}}];
}
