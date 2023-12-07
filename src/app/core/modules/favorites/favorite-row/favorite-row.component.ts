import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CartService } from 'src/app/core/services/models/cart.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import swal from 'sweetalert2';
import { LoginService } from '../../../services/login/login.service';
import { User } from 'src/app/core/services/login/User.interface';
import { FavoriteProduct } from 'src/app/core/interfaces/favoriteProduct.interface';

@Component({
  selector: 'app-favorite-row',
  templateUrl: './favorite-row.component.html',
  styleUrls: ['./favorite-row.component.css']
})
export class FavoriteRowComponent {

  @Input() product: Product = {} as Product;
  @Input() i: number = 0;
  userData: User = {} as User;
  favoriteProducts: FavoriteProduct[] = [];


  constructor(
    private router: Router,
    private cartService: CartService,
    private favoritesService: FavoritesService,
    private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.currentUserData.subscribe({ next:(userData)=>{ this.userData = userData }});
    // this.favoritesService.myFavoritesCart.subscribe({next:(favorites => {console.log('favorites:',favorites);this.favoriteProducts = favorites})})
    // this.favoritesService.checkFavoritesCart();

  }

  addItem() {
    let resp = this.cartService.addItem(this.product);
    let timerInterval: any;
    console.log(this.product);
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-warning"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Producto Agregado",
      text: this.product.brand?.brandname + " " + this.product.name + " $" + this.product.price,
      imageUrl: this.product.image,
      showCancelButton: true,
      confirmButtonText: "Continuar",
      cancelButtonText: "Ver Carrito",
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        console.log('continuar comprando');

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        console.log('ver carrito');
        this.router.navigateByUrl('/mi-carrito');
      }
    });
    console.log('swal')
  }

  removeFavorite(productId: number, index: number) {

    const el = document.getElementById(productId.toString());
    console.log(el);
    el?.remove();
    console.log('index-row', index);
    let favoriteProduct = { productId: productId, userId: this.userData.id };
    this.favoritesService.remove(favoriteProduct);
    this.favoritesService.getAll();

  }

}
