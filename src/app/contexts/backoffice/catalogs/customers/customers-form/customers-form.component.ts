import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/core/interfaces/address.interface';
import { Role } from 'src/app/core/interfaces/role.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { UserLogged } from 'src/app/core/interfaces/userLogged.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { AddressService } from 'src/app/core/services/models/address.service';
import { CustomerService } from 'src/app/core/services/models/customer.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent {

  showForm: boolean = true;
  role: Role = {id:2, name: ''}
  customer: User = {id: 0} as User;
  // human: Human = { id: 0, name: '', lastname: '', address1: '', address2: '', email: '', city: '', country: '', telephone: '', postalcode: 0, user: this.user};
  // customer: Customer = { id: 0 };
  errorMessage: string = '';
  showError: boolean = false;
  customers: any;
  params: any;
  addresses: Address[] = [];
  public userLogged?: UserLogged;


  url = 'http://localhost:8080/api';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService,
    private loginService: LoginService,
    private addressService: AddressService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    this.getCustomerById(this.params.params.id);

    this.loginService.checkStatus();





    this.loginService.currentUserData.subscribe({
      next:(currentUserData)=>{
        console.log('header-loginOn', currentUserData);
        this.userLogged = currentUserData;
      }
    })

    this.addressService.getByUserId(this.params.params.id)
      .subscribe({
        next: resp=>{
          console.log('adresses:', resp)
          this.addresses = resp;
        },
        error: error=>{
          console.log('error',error);
        }
      })

  }


  gotoUser(id: number){
    this.router.navigate(
      ['/admin/sistema/usuarios/' + id]);
  }

  getCustomerById(id: number) {
     if (id>0)
      this.customerService.getById(id).subscribe({
        next: (resp) => {console.log('customer',resp); this.customer = resp;},
        error: error => {
          this.errorMessage = 'Es posible que este registro ya no exista';
          this.showError = true;
          console.log(error)}
      });
  }

  saveOrUpdate() {
    console.log('cliente:> ', this.customer);
    //todo: fix validations
    if (this.customer.id == null  ) { this.errorMessage = 'complete todos los datos'; this.showError = true; console.log(this.showError);
    } else{
      this.customerService.saveOrUpdate(this.customer).subscribe({
        next: resp => {
          console.log(resp);
          this.customer.id=resp.customer.id;
          this.errorMessage = resp.mensaje;
          this.showError = true;},
        error: error => { console.log(error);this.errorMessage = error.error.message; this.showError = true}
      });

    }
  }



}
