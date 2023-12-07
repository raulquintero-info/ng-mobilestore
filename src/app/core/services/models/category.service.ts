import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
// import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  urlBase =  "http://localhost:8080/api/categorias";
  currentCategoryId: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) { }

  get CurrentCategoryId(): Observable<number> {
    return this.currentCategoryId.asObservable();
  }

  setCurrentCategory(id: number) { console.log(id); this.currentCategoryId.next(id); }

  getAll(page: number = 0): Observable<any> { return this.http.get(this.urlBase); }
  getAllActive(page: number = 0): Observable<any> { return this.http.get(this.urlBase); }
  getById(id: number = 0): Observable<any> { return this.http.get(this.urlBase + '/' + id); }






}
