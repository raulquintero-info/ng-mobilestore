import { User } from "./user.interface";

export interface Address{
  id:       number;
  address1: string;
  address2: string;
  zipCode:  string;
  city:     string;
  state:    string;
  country:  string;
  alias:    string;
  primaryAddress:  boolean;
  user:     User;

}
