import { Brand } from "./brand.interface";
import { Category } from "./category.interface";

export interface Product{
  id: number;
  name?: string;
  description?: string;
  image?: string;
  quantity?: number;
  price: number;
  isOffer: boolean;
  isFavorite?: number | null;
  offerPrice: number;
  brand?: Brand;
  category?: Category;

}
