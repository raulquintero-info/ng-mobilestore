import { Orderstatus } from "./orderstatus.interface";
import { Product } from "./product.interface";
import { statusOrder } from "./statusOrder.interface";
import { User } from "./user.interface";

export interface Cart{
  orderproducts: Array<Product>,
  total: number,
  totalAbs: number,
  pickup: number,
  address1?: string,
  address2?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  orderStatus?: Orderstatus;
  user?: User;
}
