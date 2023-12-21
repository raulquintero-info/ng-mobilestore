import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/core/services/models/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  private url: string = 'http://localhost:8080/api';
  public errorMessage: string = '';
  public showError: boolean = false;
  public customers: any;

    constructor(private router: Router, private http: HttpClient, private customerService: CustomerService){}

    ngOnInit(){

      this.getCustomers()
    }

    gotoEdit(id: number){
      this.router.navigate(
        ['/admin/cliente/editar/' + id]);
    }

    gotoAltas(){
      this.router.navigate(
        ['/admin/clientes/nuevo']);
    }

    delete(id: number) {
      if (id>0)
       this.customerService.deleteById(id).subscribe({
         next: (resp) => {
            this.errorMessage = 'Cliente Eliminado';
            this.showError = true;
            console.log(resp);
            this.getCustomers()},
         error: error => {
           this.errorMessage = 'Es posible que es registro ya no exista';
           this.showError = true;
           console.log(error)}
       });
   }

    getCustomers( ) {
      fetch(this.url + '/clientes')
        .then((response) => response.json())
        .then(result => {
          console.log('----->>>>', result);
          if (result.error) {
            this.errorMessage = result.error;
            this.showError = true;
          } else
            this.customers = result
        });

    }
}
