import { Human } from "./human.interface";
import { Role } from "./role.interface";

export interface User{
  id: number;
  username: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  session?: string;
  rol?: Role;

}
