import { Product } from "./product.interface";
import { statusOrder } from "./statusOrder.interface";

export interface Cart{
  items: Array<Product>,
  total: number,
  totalAbs: number,
  pickup: number,

}
