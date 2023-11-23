import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from './loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);
  currentUserData: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>({} as LoginResponse);

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<LoginResponse>{
    console.log(credentials)
    return this.http.post<LoginResponse>('http://localhost:8080/auth/login', credentials).pipe(
      tap( (userData: LoginResponse) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
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
        message = error.status + ". " + error.error;
      }
    console.log(error);
    return  throwError(()=> new Error( message));
  }

  // get userData(): Observable<LoginResponse>{
  //  return this.currentUserData.asObservable();
  // }

  // get userLoginOn(): Observable<boolean>{
  //   return this.currentUserLoginOn.asObservable();
  // }



}
