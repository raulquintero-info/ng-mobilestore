import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import { ProductService } from 'src/app/core/services/models/product.service';

@Component({
  selector: 'app-favorite-social-bar',
  templateUrl: './favorite-social-bar.component.html',
  styleUrls: ['./favorite-social-bar.component.css']
})
export class FavoriteSocialBarComponent {
  @Input() product: Product = {} as Product;
  @Input() index: number = 0;
  favoriteClass: string = "btn-outline-danger";
  userData: User = {} as User;
  favoriteProducts: Product[] = [];
  userLoginOn: boolean =false;

  constructor(
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private loginService: LoginService){}

  ngOnInit(){

    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData
      }
    });

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

  }

  favoriteAction(productId: number){
    // this.favoritesService.checkFavoritesCart();
    this.productService.getIsFavoriteByUserId(productId,1).subscribe({next: product => { console.log(this.product); this.product = product}});
    console.log('userdata: ',this.userData);
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


}
