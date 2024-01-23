import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from '../login/User.interface';
// import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class UserService {
  urlBase =  "http://localhost:8080/api/usuarios";
  userData: User = {} as User;


  constructor(private http: HttpClient) {

    // let temp: any = sessionStorage.getItem('user');
    // this.userData = JSON.parse(temp);
    this.get();
  }

  get(){let temp: any = sessionStorage.getItem('user');this.userData = JSON.parse(temp);}
  getAll(page: number = 0): Observable<any> { return this.http.get(this.urlBase ); }
  getById(id: number = 0): Observable<any> { return this.http.get(this.urlBase + '/' + id); }

  update(user: User): Observable<any> { return this.http.put(this.urlBase, user); }



}
