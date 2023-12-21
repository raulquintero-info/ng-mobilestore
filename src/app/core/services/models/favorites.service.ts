import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { FavoriteProduct } from '../../interfaces/favoriteProduct.interface';
import { User } from '../login/User.interface';

@Injectable({ providedIn: 'root' })
export class FavoritesService {

  userData: User = {} as User;
  favorites: FavoriteProduct[] = [];
  private favoritesCart: BehaviorSubject<FavoriteProduct[]> = new BehaviorSubject<FavoriteProduct[]>([]);

  urlBase = "http://localhost:8080/api/favoritos";



  constructor(private http: HttpClient) {
    let temp: any = sessionStorage.getItem('user');
    this.userData = JSON.parse(temp);
  }


  get myFavoritesCart(): Observable<any> {
    return this.favoritesCart.asObservable();
  }


  setFavoritesCart(favoritesCart: FavoriteProduct[]) {
    this.favoritesCart.next(favoritesCart);
  }


  getAll() {
    if (this.userData == null) return;
    let userId = this.userData.id;

    this.favorites = [];
    this.http.get<FavoriteProduct[]>(this.urlBase + '/' + userId)
      .subscribe({ next: resp => { console.log(resp);this.setFavoritesCart(resp);}})
  }

  add(favoriteProduct: FavoriteProduct): Observable<any> {
    this.favorites.push(favoriteProduct);
    this.setFavoritesCart(this.favorites);
    return this.http.post(this.urlBase + '-agregar', favoriteProduct)
  }

  remove(favoriteProduct: FavoriteProduct): any {
    console.log('remove:', this.urlBase + '-eliminar', favoriteProduct);
    this.http.post<any>(this.urlBase + '-eliminar', favoriteProduct).subscribe({ next: resp => { this.getAll()}})
  }

    // const eliminar = this.favorites.findIndex(p => p.productId === favoriteProduct.productId);
    // temp = [...this.favorites.splice(eliminar), favoriteProduct];









}
