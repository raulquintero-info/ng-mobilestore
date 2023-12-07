import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/models/product.service';
import { CartService } from '../../../../core/services/models/cart.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {} as Product;
  params: any;
  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);

    this.productService.getById(this.params.params.id).subscribe({next: product => { this.product = product}});
  }


  addItem(){
    let resp = this.cartService.addItem(this.product);
    let timerInterval: any;
    console.log(this.product);
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-warning"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Producto Agregado",
      text: this.product.brand?.brandname + " " +this.product.name + " $" + this.product.price,
      imageUrl: this.product.image,
      showCancelButton: true,
      confirmButtonText: "Continuar",
      cancelButtonText: "Ver Carrito",
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        console.log('continuar comprando');

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        console.log('ver carrito');
        this.router.navigateByUrl('/mi-carrito');
      }
    });
    console.log('swal')
  }


}
