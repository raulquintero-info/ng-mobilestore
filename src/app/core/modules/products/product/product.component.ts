import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { CartService } from 'src/app/core/services/models/cart.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import { ProductService } from 'src/app/core/services/models/product.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  favoriteClass: string = "btn-outline-danger";
  userData: User = {} as User;

  constructor(private router: Router, private cartService: CartService,
    private favoritesService: FavoritesService,
    private loginService: LoginService,
    private productService: ProductService){}

  favoriteAction(productId: number ){
    this.productService.getIsFavoriteByUserId(productId,1).subscribe({next: product => { console.log(this.product); this.product = product}});
    let favoriteProduct = {productId: productId, userId: this.userData.id};
    if (!this.product.isFavorite ) {
      this.favoriteClass = "btn-danger";
      this.favoritesService.add(favoriteProduct).subscribe({next: product => {  this.product = product.favoriteProduct}});

    }
    else {
      this.favoriteClass = "btn-outline-danger"
      this.favoritesService.remove(favoriteProduct);

    }
    console.log("end" ,this.product);
  }


  addItem(){
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
      text: this.product.brand?.brandname + " " +this.product.name + " $" + this.product.price,
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
}
