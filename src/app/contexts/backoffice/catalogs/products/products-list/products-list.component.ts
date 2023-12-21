import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CategoryService } from 'src/app/core/services/models/category.service';
import { ProductService } from 'src/app/core/services/models/product.service';
import { NavPage } from './nav-page';
import { ProductsPageable } from 'src/app/core/interfaces/productsPageable.interface';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  // private params: any;
  public queryParams: any;
  private queryParamsString: string = '';
  public errorMessage: string = '';
  public showError: boolean = false;
  public products: Product[] = [];
  public categories: Category[] = [];
  public categoryId: number = 0;
  public page: number = 0;
  public navigation: NavPage = {} as NavPage;
  public actualPage: number = 1;
  public newPage: number=0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.queryParams = params );
    this.categoryId = this.queryParams.categoryid??0;
    this.page=this.queryParams.pag??1;
    console.log('act', this.page);

    this.categoryService.getAll().subscribe({next: resp=>{this.categories=resp}});
    console.log('nav',this.navigation);
    // this.productService.getAllCatalog(this.page).subscribe({next: response => {this.products = response.content;}});
    this.getProducts(this.page);
  }

  getProducts(page: number){
    page = Number(page);
    this.productService.getAllCatalog(page)
    .subscribe({
      next: (response) => {
        let dt = response as ProductsPageable;
        this.products = response.content;
        this.navigation.actualPage = page;
        this.navigation.previousPage = page-1;
        this.navigation.nextPage = page+1;
        this.navigation.totalElements = dt.totalElements;
        this.navigation.first = dt.first;
        this.navigation.last = dt.last;
        this.navigation.numberOfElements = dt.numberOfElements;
        this.navigation.totalPages = dt.totalPages;
        if(!this.navigation.last) this.navigation.end = page * dt.size;
          else this.navigation.end = dt.totalElements;
        this.navigation.start = this.navigation.end - dt.size + 1;
        console.log('dt', dt);
      },
      error: error => {
        alert('algo salio mal en el servidor')
        console.log(error);
      }
    });

  }

  selectCategory(){
    let query: any;
    query = JSON.stringify(this.queryParams);
    query = JSON.parse(query);
    query.categoryid = this.categoryId;
    query = new URLSearchParams(query).toString();
    console.log( query);
    this.router.navigateByUrl('/admin/productos?' + query)
  }

  gotoEdit(id: number) { this.router.navigate(['/admin/productos/forma/' + id]); }
  gotoAltas() { this.router.navigate(['/admin/productos/altas']); }

  delete(id: number) {
    if (id > 0)
      this.productService.deleteById(id).subscribe({
        next: (resp) => {
          this.errorMessage = resp.message;
          // this.showError = true; this.getProducts();
        },
        error: error => { this.errorMessage = error; this.showError = true }
      });
    // this.getProducts(this.actualPage)


  }

  changePageBtn(newPage: number) {
    // if (this.navigation.first) return;
    let query: any;
    query = JSON.stringify(this.queryParams);
    query = JSON.parse(query);
    query.pag = newPage;
    query = new URLSearchParams(query).toString();
    // if (this.navigation.totalElements / this.navigation.size > this.navigation.nextPage)
      // console.log('/admin/productos?' + query);
    // console.log('newPage:',newPage);
    console.log('newNav', this.navigation);
    this.productService.getAllCatalog(newPage).subscribe({next: response => {this.products = response.content;}});
    this.getProducts(newPage);

    this.router.navigateByUrl('/admin/productos?' + query);
  }


}
