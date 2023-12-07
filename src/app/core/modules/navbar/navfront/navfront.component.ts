import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { User } from 'src/app/core/services/login/User.interface';
import { CategoryService } from 'src/app/core/services/models/category.service';

@Component({
  selector: 'app-navfront',
  templateUrl: './navfront.component.html',
  styleUrls: ['./navfront.component.css']
})
export class NavfrontComponent implements OnInit, OnDestroy {
  userLoginOn: boolean = false;
  categories: Category[] = [];
  userData: User = {} as User;
  titleBar: string = 'Aprovecha nuestras ofertas! ';
  currentCategoryId: number = 0;
  public user: User = {} as User;

  constructor(private loginService: LoginService,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {

    this.loginService.checkStatus();

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData
      }
    })

    this.categoryService.getAll().subscribe({
      next: (resp) => { this.categories = resp as Array<Category>; console.log(this.categories) },
      error: error => { console.log('navFront', error) }
    });


  }

  ngOnDestroy() {
    this.loginService.currentUserLoginOn.unsubscribe();
    this.loginService.currentUserData.unsubscribe();
  }

  gotoCategoryId(categoryId: number){
    this.categoryService.setCurrentCategory(categoryId);
    this.router.navigateByUrl('productos/por-categoria/' + categoryId);
    console.log('categoryId: ',categoryId);
  }

  login() {
    console.log('login<<<<<');
    this.router.navigateByUrl('/login');
  }

  logout() {
    console.log('logout>>>>');
    this.loginService.logout()
  }



}
