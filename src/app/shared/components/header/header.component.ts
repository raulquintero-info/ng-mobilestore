import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/services/login/User.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/core/services/models/cart.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  userLoginOn: boolean =false;
  userData: User = {} as User;
  favoriteProducts: Product[] = [];
  public user: User = {} as User;
  public cart: any;
  // constructor(private loginService: LoginService){}

  constructor(
    private loginService: LoginService,
    private cartService: CartService,
    private favoritesService: FavoritesService,
    private router: Router,
    private cookies: CookieService){}

  ngOnInit(){

    this.loginService.checkStatus();

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData
      }
    })

    if(this.userData.rol.name=="customer") {

      this.favoritesService.myFavoritesCart.subscribe({
        next:(favorites => {
          console.log('favorites:',favorites);
          this.favoriteProducts = favorites})
        });
      this.favoritesService.getAll();
    }

    this.cartService.Cart.subscribe({next:(cart)=>{console.log('header-cart', cart);this.cart = cart;}})
    this.cartService.checkCartItems();


  }


logout(){
    console.log('logout>>>>');
    this.cart.address1 = '';
    this.cart.address2 = '';
    this.cart.city = '';
    this.cart.country = '';
    this.cart.zipCode = '';
    this.cartService.setCartitems(this.cart);
    this.loginService.logout()
  }


  ngOnDestroy(){
    this.loginService.currentUserLoginOn.unsubscribe();
    this.loginService.currentUserData.unsubscribe();
  }





}
