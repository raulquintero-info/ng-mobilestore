import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
// import { ProductsPageable } from '../interfaces/productsPageable.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
urlBase =  "http://localhost:8080/api/productos";





constructor(private http: HttpClient) { }

getAll(page: number = 1):Observable<any>{ return this.http.get(this.urlBase + '-nuevos'); }
getByCategoryId(id: number = 1, userId: number = 0):Observable<any>{console.log('categoryId',id); console.log(this.urlBase + '/categoria/' + id);
  return this.http.get(this.urlBase + '/categoria/' + id + '/usuario/' + userId); }
getAllOffers(page: number = 1):Observable<any>{ return this.http.get(this.urlBase + '-oferta'); }
getById(id: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/' + id); }
deleteById(id: number = 0):Observable<any>{ return this.http.delete(this.urlBase + '/' + id); }


getIsFavoriteByUserId(productId: number = 0, userId: number = 0):Observable<any>{
  console.log(this.urlBase + '-favorito/' + productId + '/usuario/' + userId);
  return this.http.get(this.urlBase + '-favorito/' + productId + '/usuario/' + userId ); }


saveOrUpdate(entity: Product):Observable<any>{
  return entity.id ? this.http.put(this.urlBase, entity ) : this.http.post(this.urlBase, entity );
}





}
