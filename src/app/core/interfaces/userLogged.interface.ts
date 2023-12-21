import { Role } from "./role.interface";

export interface UserLogged{
  id: number;
  username?: string;
  password?: string;
  token?: string;
  isLogged?: boolean;
  rol?: Role
}
