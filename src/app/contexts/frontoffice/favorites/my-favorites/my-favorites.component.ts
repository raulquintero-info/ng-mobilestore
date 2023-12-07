import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {
  params: any;
  public favoriteProducts: Product[] = [];
  public products: Product[] = [];
  private showError: boolean = false;
  private errorMessage: string = '';
  userLoginOn: boolean = false;
  userData: User = {} as User;


  constructor(private loginService: LoginService,private favoritesService: FavoritesService){}

  ngOnInit(){
    this.loginService.checkStatus();

    this.loginService.currentUserLoginOn.subscribe({next: (userLoginOn) => {this.userLoginOn = userLoginOn;}});
    this.loginService.currentUserData.subscribe({next: (userData) => {this.userData = userData}});

    this.favoritesService.myFavoritesCart.subscribe({
      next:(favorites) => {
        this.favoriteProducts = favorites;
        this.products = favorites;
      }});
    this.favoritesService.getAll();

  }


}






