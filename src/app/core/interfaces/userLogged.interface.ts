import { Role } from "./role.interface";

export interface UserLogged{
  id: number;
  username?: string;
  password?: string;
  name?: string;
  lastname?: string;
  phone?: any;
  token?: string;
  isLogged?: boolean;
  rol?: Role
}
