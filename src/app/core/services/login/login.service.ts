import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './User.interface';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FavoritesService } from '../models/favorites.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({username: "no user",  rol:{ id: 0,  name: "no rol"}} as User);

  constructor(private http: HttpClient, private router: Router,private cookies: CookieService, private favoritesService: FavoritesService) { }

  login(credentials: LoginRequest): Observable<User>{
    console.log(credentials)
    return this.http.post<User>('http://localhost:8080/auth/login', credentials).pipe(
      tap( (userData: User) => {
        console.log('User: ', userData);
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
        sessionStorage.setItem('token', userData.token ? userData.token : '');
        sessionStorage.setItem('user',JSON.stringify(userData));
        sessionStorage.setItem('userLoginOn', JSON.stringify(true))
        this.favoritesService.getAll(userData.id);

      }),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse){
    let message= "";
    if (error.status==0){
       console.error('Se ha producido un error: ',error.error);
      message = "Ha habido un problema, intentelo de nuevo";
      } else {
        console.error('Backend retorno el codigo de estado: ' , error.status, error.error);
        message = error.status + ".- Error en Servidor";
      }
    console.log(error);
    return  throwError(()=> new Error( message));
  }

  get userData(): Observable<User>{
   return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  // setUserData(userLogged: User){
  //   console.log(userLogged);
  //   this.currentUserData.next(userLogged);
  //   this.currentUserLoginOn.next(false);
  // }


  checkStatus(){
    let currentUser: any;
    let currentUserLoginOn: any;
    let userLogged: User;
    currentUser = sessionStorage.getItem('user')
    if(currentUser){
      userLogged = JSON.parse(currentUser);
      this.currentUserData.next(userLogged);
    }
    currentUserLoginOn = sessionStorage.getItem('userLoginOn')
    if(currentUserLoginOn){
      currentUserLoginOn = JSON.parse(currentUserLoginOn);
      this.currentUserLoginOn.next(currentUserLoginOn);
    }
  }

  logout(){
    this.currentUserData.next({id:0, rol:{id:0, name:''}} as User);
    this.currentUserLoginOn.next(false);
    sessionStorage.clear();
    // await new Promise(f => setTimeout(f, 10000));
    this.router.navigateByUrl('/');

  }


}
