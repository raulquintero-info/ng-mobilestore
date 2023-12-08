import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { CartService } from '../../../services/models/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-total-to-finish',
  templateUrl: './cart-total-to-finish.component.html',
  styleUrls: ['./cart-total-to-finish.component.css']
})
export class CartTotalToFinishComponent {
  @Input() cart: Cart = {} as Cart;

  constructor(private cartService: CartService, private router: Router){}

  finishOrderBtn(){
    this.router.navigateByUrl('/resumen-de-la-orden');

    // this.cartService.sendOrder()
    // .subscribe({
    //   next: response=>{
    //     console.log(response);
    //   },
    //   error: response => {
    //     console.log('Algo no salio bien!');
    //     alert('Algo salio mal, intentelo mas tarde')
    //   }
    // });

  }

}
