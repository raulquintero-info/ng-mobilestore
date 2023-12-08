import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { CookieService } from 'ngx-cookie-service';
import { Brand } from '../../interfaces/brand.interface';

@Injectable({ providedIn: 'root' })
export class BrandService {
urlBase = "http://localhost:8080/api/marcas";



constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

getAll(page: number = 0):Observable<any>{ return this.http.get(this.urlBase); }
getById(id: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/' + id); }

saveOrUpdate(brand: Brand):Observable<any>{
  return brand.id ? this.http.put(this.urlBase, brand ) : this.http.post(this.urlBase, brand );}






}
