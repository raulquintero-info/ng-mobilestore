import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class DashboardService {
urlBase = "http://localhost:8080/api/widgets";



constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

getWidgets():Observable<any>{ return this.http.get(this.urlBase); }




}
