import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/interfaces/order.interface';
import { Orderstatus } from 'src/app/core/interfaces/orderstatus.interface';
import { OrderService } from 'src/app/core/services/models/order.service';
import { OrderStatusService } from 'src/app/core/services/models/orderstatus.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit{
  orders: Order []  = [];
  order: Order = {} as Order;
  orderStatus: Orderstatus[] = [];
  params: any;
  constructor(
    private orderstatusService: OrderStatusService,
    private orderService: OrderService,
    private route: ActivatedRoute,){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.getOrderById(this.params.params.id);
    // this.getOrderById(2);
    this.getAllOrderStatus();

  }

  setStatus(opt: any){

    console.log(this.order, opt.target.value );
    this.order.orderstatus.id = opt.target.value;
    this.orderService.update(this.order)
    .subscribe({
      next: (response) => {
        console.log('orders: ', response);
        this.order = response;
        const swalWithBootstrapButtons = swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-warning"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Se ha Actualizado el Status de la Orden",
          text: " Status: " + this.order.orderstatus.name,
          imageUrl: '/assets/icons/flying_cart.png',
          // icon: "success",
          showCancelButton: false,
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
          reverseButtons: true
        }).then((result: any) => {
          if (result.isConfirmed) {
            console.log('click Aceptar');

          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === swal.DismissReason.cancel
          ) {
            console.log('ver carrito');
          }
        });
      },
      error: error=>{
        // this.getOrderById(this.params.params.id);

        console.log('error: ', error);
      }
    });
  }


  getOrders(page: number){
    page = Number(page);
    this.orderService.getAll()
    .subscribe({
      next: (response) => {
        console.log('orders: ', response);
        this.orders = response;

      },
      error: error=>{
        console.log('error: ', error);
      }
    });
  }

  getOrderById(id: number){
    this.orderService.getById(id)
    .subscribe({
      next: resp => { console.log('order', resp);this.order = resp; },
      error: resp=> { console.log('error', resp); }
    });
  }

  getAllOrderStatus() {
    this.orderstatusService.getAll().subscribe({
      next: (resp) => { console.log('orderStatus',resp); this.orderStatus = resp; },
      error: error => {
        console.log(error);
        // this.errorMessage = 'Ha habido un problema, intentelo mas tarde';
        // this.showError = true;
        console.log(error)
      }
    });
  }

}
