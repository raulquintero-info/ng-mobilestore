import { Address } from "./address.interface";
// import { Orderproduct } from "./orderproduct.interface";
import { Orderstatus } from "./orderstatus.interface";
import { Product } from "./product.interface";
import { User } from "./user.interface";

export interface Order {
  date:           string;
  total:          number;
  pickup:         boolean;
  orderstatus:    Orderstatus;
  orderproducts:  Product[];
  address1:       string;
  address2:       string;
  city:           string;
  country:        string
  id:             number;
  user:           User
}
