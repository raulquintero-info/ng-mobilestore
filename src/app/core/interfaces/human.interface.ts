import { User } from "./user.interface";

export interface Human {

  id: number;
  name: string;
  lastname: string;
  email: string;
  address1: string;
  address2: string
  city: string;
  country: string;
  telephone: string;
  postalcode: number;
  user?: User;



}
