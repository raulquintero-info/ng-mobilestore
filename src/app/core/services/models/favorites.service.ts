import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { FavoriteProduct } from '../../interfaces/favoriteProduct.interface';
import { User } from '../login/User.interface';
// import { ProductsPageable } from '../interfaces/productsPageable.interface';

@Injectable({ providedIn: 'root' })
export class FavoritesService {

  userData: User ={} as User;
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

  checkFavoritesCart() {
    // this.favorites = this.getAll();
    console.log('check', this.favorites);

  }

  getAll() {
    let userId = this.userData.id;
    let favorites: any;
    this.favorites = [];
     this.http.get<FavoriteProduct[]>(this.urlBase + '/' + userId)
     .subscribe({
      next: resp => {
        console.log('respuesta',resp);
        this.setFavoritesCart(resp);
      }
     })
     console.log('return', this.favorites);
    }

  add(favoriteProduct: FavoriteProduct ): Observable<any> {
    this.checkFavoritesCart();
    // this.favorites = this.getAll();
    console.log('this.favorites', this.favorites);
    this.favorites.push(favoriteProduct);
    this.setFavoritesCart(this.favorites);
    return this.http.post(this.urlBase + '-agregar', favoriteProduct)
  }
  remove(favoriteProduct: FavoriteProduct): any  {
    console.log('remove:',this.urlBase + '-eliminar', favoriteProduct);
    this.http.post<any>(this.urlBase + '-eliminar', favoriteProduct)
      .subscribe({
        next: resp =>{
          // this.checkFavoritesCart()

          // this.setFavoritesCart(this.favorites);
          // const eliminar = this.favorites.findIndex(p => p.productId === favoriteProduct.productId);
          // temp = [...this.favorites.splice(eliminar), favoriteProduct];
          console.log('this.favorites',this.favorites)
        },
        error: error => {
          console.log(error);
        }
      })
  }




  getById(id: number = 0): Observable<any> { return this.http.get(this.urlBase + '/' + id); }
  deleteById(id: number = 0): Observable<any> { return this.http.delete(this.urlBase + '/' + id); }
  saveOrUpdate(entity: Product): Observable<any> {
    return entity.id ? this.http.put(this.urlBase, entity) : this.http.post(this.urlBase, entity);
  }





}
