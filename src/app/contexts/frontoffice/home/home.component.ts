import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CategoryService } from 'src/app/core/services/models/category.service';
import { FavoritesService } from 'src/app/core/services/models/favorites.service';
import { ProductService } from 'src/app/core/services/models/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  params: any;
  public products: Product[] = [];
  public favoriteProducts: Product[] = [];
  public showError: boolean = false;
  public errorMessage: string = '';
  url: string = "http://localhost:8080/api";

  constructor(private productService: ProductService,private route: ActivatedRoute,private categoryService: CategoryService,private favoritesService: FavoritesService){}

  ngOnInit(){
    // this.route.paramMap.subscribe(params => this.params = params);
    // let id = this.params.params.id;
    // console.log('params.id', this.params.params.id);

    // this.categoryService.getById(this.params.params.id).subscribe({next: category => { this.categorySelected = category}});
    // console.log("category", this.categorySelected);
    this.favoritesService.myFavoritesCart.subscribe({
      next:(favorites) => {
        this.favoriteProducts = favorites;
        // this.products = favorites;
      }
    });
    this.favoritesService.getAll();



    this.productService.getAll(1).subscribe({
      next: products => {
        this.products = products.content;
      },
      error: resp => {
        console.table(resp.name);
        this.errorMessage = resp.name
        this.showError = true
      }
    });
    console.log('loading favorites')
    this.favoritesService.getAll();

  }





}
