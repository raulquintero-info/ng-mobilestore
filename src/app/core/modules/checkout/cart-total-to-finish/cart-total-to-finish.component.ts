import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { CartService } from '../../../services/models/cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import { User } from 'src/app/core/services/login/User.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cart-total-to-finish',
  templateUrl: './cart-total-to-finish.component.html',
  styleUrls: ['./cart-total-to-finish.component.css']
})
export class CartTotalToFinishComponent implements OnInit {
  @Input() cart: Cart = {} as Cart;
  userData: User = {} as User;

  constructor(private loginService: LoginService, private cartService: CartService, private router: Router) { }

  ngOnInit() {

    this.loginService.currentUserData.subscribe({ next: (userData) => { this.userData = userData } });


  }

  finishOrderBtn() {

    console.log('cart', this.cart);
    this.cart.user!.id = this.userData.id;
    // this.cartService.setCartitems(this.cart);

    this.cartService.sendOrder()
      .subscribe({
        next: response => {
          console.log('Orden Registrada', response);
          this.cartService.restart();
          const swalWithBootstrapButtons = swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-warning"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "La Orden ha sido enviada",
            text: "Total de la Orden: $" + this.cart.total.toFixed(2),
            imageUrl: '/assets/icons/flying_cart.png',
            // icon: "success",
            showCancelButton: false,
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then((result: any) => {
            if (result.isConfirmed) {
              console.log('enviar a catalogo principal');
              this.router.navigateByUrl('/');

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === swal.DismissReason.cancel
            ) {
              console.log('ver carrito');
            }
          });
          // this.router.navigateByUrl('/resumen-de-la-orden');
        },
        error: response => {
          console.log(response);
          alert(response.error.message)
        }
      });

  }

}
