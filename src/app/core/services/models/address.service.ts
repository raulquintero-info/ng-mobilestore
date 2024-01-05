import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { Address } from '../../interfaces/address.interface';

@Injectable({ providedIn: 'root' })
export class AddressService {
urlBase =  "http://localhost:8080/api/direcciones";
userData: User = {} as User;


constructor(private http: HttpClient, private router: Router) {

  let temp: any = sessionStorage.getItem('user');
  this.userData = JSON.parse(temp);
}


getAll(page: number = 0):Observable<any>{ return this.http.get(this.urlBase ); }
getById(id: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/' + id); }
getByUserId(userId: number = this.userData.id):Observable<any>{
  console.log(this.urlBase + '/usuario/' + userId);
  console.log(this.userData, userId);
  return this.http.get(this.urlBase + '/usuario/' + userId);
}
// save(address: Address):Observable<any>{
//   return this.http.post(this.urlBase + '/usuario/' + this.userData.id, address);
// }

saveOrUpdate(address: Address):Observable<any>{
  return address.id ? this.http.put(this.urlBase, address ) : this.http.post(this.urlBase, address );}


deleteById(id: number = 0):Observable<any>{ return this.http.delete(this.urlBase + '/' + id); }

// saveOrUpdate(entity: Customer):Observable<any>{
//   console.log("service:>>", entity);
//   return (entity.id > 0) ? this.http.put(this.urlBase, entity ) : this.http.post(this.urlBase, entity );}

// }


}
