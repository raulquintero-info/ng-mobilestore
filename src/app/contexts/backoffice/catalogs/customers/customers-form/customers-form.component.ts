import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { Human } from 'src/app/core/interfaces/human.interface';
import { Role } from 'src/app/core/interfaces/role.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { UserLogged } from 'src/app/core/interfaces/userLogged.interface';
import { LoginService } from 'src/app/core/services/login/login.service';
import { CustomerService } from 'src/app/core/services/models/customer.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent {

  showForm: boolean = true;
  role: Role = {id:2, name: ''}
  user: User = {id: 0, username: '', password: '', rol: this.role};
  human: Human = { id: 0, name: '', lastname: '', address1: '', address2: '', email: '', city: '', country: '', telephone: '', postalcode: 0, user: this.user};
  customer: Customer = { id: 0, human: this.human };
  errorMessage: string = '';
  showError: boolean = false;
  customers: any;
  params: any;
  public userLogged?: UserLogged;


  url = 'http://localhost:8080/api';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService,
    private loginService: LoginService,
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
  }


  gotoUser(id: number){
    this.router.navigate(
      ['/admin/sistema/usuarios/' + id]);
  }

  getCustomerById(id: number) {
     if (id>0)
      this.customerService.getById(id).subscribe({
        next: (resp) => {this.customer = resp;},
        error: error => {
          this.errorMessage = 'Es posible que es registro ya no exista';
          this.showError = true;
          console.log(error)}
      });
  }

  saveOrUpdate() {
    console.log('cliente:> ', this.customer);
    //todo: fix validations
    if (this.customer.id == null  ) { this.errorMessage = 'complete todos los datos'; this.showError = true; console.log(this.showError);
    } else{
      console.log(this.customer.human!.email);
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
