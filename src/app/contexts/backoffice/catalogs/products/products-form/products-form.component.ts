import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Product } from 'src/app/core/interfaces/product.interface';
import { BrandService } from 'src/app/core/services/models/brand.service';
import { CategoryService } from 'src/app/core/services/models/category.service';
import { ProductService } from 'src/app/core/services/models/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

  private params: any;
  private url: string = 'http://localhost:8080/api';

  public showError: boolean = false;
  public showMessage: boolean = false;
  public errorMessage: string = '';
  showForm: boolean = true;
  product: Product;
  categories: any = null;
  brands: any = null;
  txtBtnSaveOrUpdate: string ='';


  loginForm = this.fb.group({
    id:['', [Validators.required]],
    name:['',Validators.required],
    lastname:['',Validators.required],
    description:['',Validators.required],
    image:['',Validators.required],
    quantity:['',Validators.required],
    precio:['',Validators.required],
    isOffer:['',Validators.required],
    offerPrice:['',Validators.required],
    brandId:['',Validators.required],
    categoryId:['',Validators.required],
  })

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
  ) {

    this.product = {
      id: 0,
      price: 0,
      isOffer: false,
      image: '/assets/images/noimage.jpg',
      offerPrice: 0,
      brand: { id: 0, brandname: '' },
      category: { id: 0, name: '' },

    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.params = params);
    this.getProductById(this.params.params.id);
    this.getAllCategories();
    this.getAllBrands();
    this.txtBtnSaveOrUpdate = (this.product.id==0) ? 'Grabar' : 'Actualizar'
    // console.log(this.product.name);
  }


  saveProduct() {
    this.showError = false;
    if (this.product.id == null || this.product.name == '' || this.product.quantity == null
      || this.product.price == null || this.product.brand!.id < 1) {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.log(this.product);
    this.productService.saveOrUpdate(this.product).subscribe({
      next: resp => { this.product.id = resp.product.id; this.errorMessage = resp.mensaje; this.showError = true; },
      error: error => { this.errorMessage = error; this.showError = true; }
    });

  }

  getAllBrands() {
    this.brandService.getAll().subscribe({
      next: (resp) => { this.brands = resp; },
      error: error => {
        this.errorMessage = 'Ha habido un problema, intentelo mas tarde';
        this.showError = true;
        console.log(error)
      }
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe({
      next: (resp) => { this.categories = resp; },
      error: error => {
        this.errorMessage = 'Ha habido un problema, intentelo mas tarde';
        this.showError = true;
        console.log(error)
      }
    });
  }
  getProductById(id: number) {
    if (id > 0)
      this.productService.getById(id).subscribe({
        next: (resp) => { this.product = resp; },
        error: error => {
          this.errorMessage = 'Ha habido un problema, intentelo mas tarde';
          this.showError = true;
          console.log(error)
        }
      });
  }

}
