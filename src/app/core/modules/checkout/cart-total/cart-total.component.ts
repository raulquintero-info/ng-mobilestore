import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/interfaces/cart.interface';
import { User } from 'src/app/core/services/login/User.interface';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit{
  @Input() cart: Cart = {} as Cart;
  userData: User = {} as User;

  constructor( private router: Router, private loginService: LoginService){}


  ngOnInit(){
    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData
      }
    })
  }

  clickButton(){
    this.router.navigate(['/tipo-de-envio']);
  }

  gotoLogin(){
    this.router.navigate(['/login']);

  }
}
