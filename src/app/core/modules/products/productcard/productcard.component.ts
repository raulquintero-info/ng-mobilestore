import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CartService } from 'src/app/core/services/models/cart.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import { LoginService } from '../../../services/login/login.service';
import swal from'sweetalert2';
import { User } from 'src/app/core/services/login/User.interface';
import { ProductService } from 'src/app/core/services/models/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() product: Product = {} as Product;
  favoriteClass: string = "btn-outline-danger";
  userData: User = {} as User;
  constructor(
    private router: Router,
    private cartService: CartService,
    private favoritesService: FavoritesService,
    private loginService: LoginService,
    private productService: ProductService){}

  ngOnInit(){
    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData
      }
    })
    // console.log(this.product);
  }

  showProduct(id: number){
    this.router.navigate(
      ['/producto/' + id]);
  }

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
    console.log("favorite action end" ,this.product);
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
