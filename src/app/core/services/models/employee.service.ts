import { Employee } from './../../interfaces/employee.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Customer } from 'src/app/core/interfaces/customer.interface';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
urlBase =  "http://localhost:8080/api/clientes";



constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

getAll(page: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/page/' + page); }
getById(id: number = 0):Observable<any>{ return this.http.get(this.urlBase + '/' + id); }
deleteById(id: number = 0):Observable<any>{ return this.http.delete(this.urlBase + '/' + id); }

saveOrUpdate(entity: Customer):Observable<any>{
  console.log("service:>>", entity);
  return (entity.id > 0) ? this.http.put(this.urlBase, entity ) : this.http.post(this.urlBase, entity );}





}
