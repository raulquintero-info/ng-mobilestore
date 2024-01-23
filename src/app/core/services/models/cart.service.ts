import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
// import { environment } from "src/environments/environments";
import { Cart } from 'src/app/core/interfaces/cart.interface';
// import { CartItem } from '../interfaces/cartitem.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { User } from '../../interfaces/user.interface';
// import { isArray } from 'jquery';

@Injectable({ providedIn: 'root' })
export class CartService {
  urlBase = "http://localhost:8080/api/checkout";

  item: Product = { id: 0, price: 0, isOffer: false, offerPrice: 0};
  cartitems: Cart = { orderproducts: [], address1: '', total: 0, totalAbs: 0, pickup: 0, user: {} as User};
  private cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cartitems);

  constructor(private http: HttpClient) {

  }

  get Cart(): Observable<Cart> {
    return this.cart.asObservable();
  }

  setCartitems(cart: Cart) {
    this.cart.next(cart);
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems));
  }

  checkCartItems() {
    let temp = localStorage.getItem('cartitems');
    if (temp)
      this.cartitems = JSON.parse(temp);

    this.cart.next(this.cartitems);
  }

  restart(){
    this.cartitems = { orderproducts: [], address1: '', total: 0, totalAbs: 0, pickup: 0, user: {} as User};
    this.cart.next(this.cartitems);
    localStorage.removeItem('cartitems');
  }

  remove(index: number) {
    this.checkCartItems();
    console.log('index >> ', index)
    this.cartitems!.orderproducts.splice(index, 1);
    let total = 0;
    for (let x of this.cartitems.orderproducts) {
      total += x.price;
    }
    console.log('total>> ', total);
    this.cartitems.total = total;
    this.setCartitems(this.cartitems);
  }

  removeItem(index: number){
    this.checkCartItems()
    // const index = this.cartitems.items.map(i => i.id).indexOf(id);
    if (index >= 0) {
      console.log("restando", index)
      this.cartitems.orderproducts[index].quantity!--;
    }
    if (this.cartitems.orderproducts[index].quantity! < 1) {
      console.log("eliminando", index)
      this.cartitems.orderproducts.splice(index,1);
    }
    let total = 0;
    let totalAbs = 0;
    for (let x of this.cartitems.orderproducts) {
      // total += x.price*x.quantity!;
      total +=(!x.isOffer)?x.price*x.quantity!:x.offerPrice * x.quantity!;
      totalAbs += x.price * x.quantity!;
    }
    console.log('total>> ', total);
    console.log('totalAbs>> ', totalAbs);
    this.cartitems.total = total;
    this.cartitems.totalAbs = totalAbs;
    if (this.cartitems.orderproducts.length == 0)
      this.cartitems.totalAbs = 0;

    this.setCartitems(this.cartitems);
    console.log(this.cartitems);
  }

  addItem(item: Product) {
    this.checkCartItems()
    console.log('checkCartItems', this.cartitems);
    const index = this.cartitems.orderproducts.map(i => i.id).indexOf(item.id);
    if (index < 0) {
      item.quantity = 1;
      this.cartitems.orderproducts.push(item);
    }
    else
    { this.cartitems.orderproducts[index].quantity!++; }

    let total = 0;
    let totalAbs = 0
    for (let x of this.cartitems.orderproducts) {
      // if(!x.isOffer)
      //   total += x.price*x.quantity!;
      // else total += x.offerPrice * x.quantity!;
      total +=(!x.isOffer)?x.price*x.quantity!:x.offerPrice * x.quantity!;
      totalAbs += x.price * x.quantity!;
      console.log('totalabs', totalAbs)
    }
    console.log('total>> ', total);
    this.cartitems.total = total;
    this.cartitems.totalAbs = totalAbs;
    this.setCartitems(this.cartitems);
    console.log(this.cartitems);
  }

  // setCustomerId(id: number = 0):Observable<any>{return this.http.get(this.urlBase + '/' + id);}



  sendOrder(): Observable<any> { console.log(this.urlBase, this.cartitems);return this.http.post(this.urlBase, this.cartitems); }



}
