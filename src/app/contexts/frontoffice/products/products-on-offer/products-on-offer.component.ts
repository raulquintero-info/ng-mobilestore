import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/models/product.service';

@Component({
  selector: 'app-products-on-offer',
  templateUrl: './products-on-offer.component.html',
  styleUrls: ['./products-on-offer.component.css']
})
export class ProductsOnOfferComponent {
  params: any;
  public products: Product[] = [];
  private showError: boolean = false;
  private errorMessage: string = '';
  url: string = "http://localhost:8080/api";

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    let id = this.params.params.id;
    let page = 1;
    console.log('paramas.id', this.params.params.id);


    this.productService.getAllOffers(page).subscribe({ next: products => { this.products = products.content; } });

  }
}
