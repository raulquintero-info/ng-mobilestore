import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class OrderService {
urlBase =  "http://localhost:8080/api/ordenes";
userData: User = {} as User;



constructor(private http: HttpClient, private router: Router) {
  let temp: any = sessionStorage.getItem('user');
  this.userData = JSON.parse(temp);
}

getAll(page: number = 0):Observable<any>{ return this.http.get(this.urlBase ); }
getById(id: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/' + id); }
getByUserId(id: number = this.userData.id):Observable<any>{ return this.http.get(this.urlBase + '/usuario/' + id); }

deleteById(id: number = 0):Observable<any>{ return this.http.delete(this.urlBase + '/' + id); }

// saveOrUpdate(entity: Customer):Observable<any>{
//   console.log("service:>>", entity);
//   return (entity.id > 0) ? this.http.put(this.urlBase, entity ) : this.http.post(this.urlBase, entity );}

// }


}
