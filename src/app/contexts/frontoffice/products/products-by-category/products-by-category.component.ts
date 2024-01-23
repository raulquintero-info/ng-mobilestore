import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { CategoryService } from 'src/app/core/services/models/category.service';
import { ProductService } from 'src/app/core/services/models/product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  public products: Array<any> = [];
  public categorySelected: Category = {};
  params: any;
  userData: User = {} as User;
  private showError: boolean = false;
  private errorMessage: string = '';
  currentCategoryId: number = 0;
  url: string = "http://localhost:8080/api";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private loginService: LoginService){}

  ngOnInit(){
    this.loginService.currentUserData.subscribe({next: (userData) => {this.userData = userData}});
    this.route.paramMap.subscribe(params => this.params = params);
    console.log('paramas.id', this.params.params.id);

    this.categoryService.currentCategoryId.subscribe({next:(id)=>{this.currentCategoryId = id;}});
    console.log("category", this.categorySelected);

    this.categoryService.getById(this.params.params.id).subscribe({next: category => { console.log(category); this.categorySelected = category}});
    console.log("category", this.categorySelected);

    this.productService.getByCategoryId(this.params.params.id, this.userData.id).subscribe({ next: products => { this.products = products; } });

    console.log('productos', this.products);

    // this.getProducts(this.params.params.id);
  }

  getProducts(id: number){
    fetch(this.url + '/productos/categoria/' + id + '/usuario/' + 1)
    .then((response) => response.json())
    .then(result => {
      if (result.error) {
        this.errorMessage = result.error;
        this.showError = true;
      } else {
        console.log('xxxxxxxxxxxxx',result);
        this.products = result;
        if(this.products.indexOf("118") != -1)
          {
            // element found
          }
      }
    })
  }



}
