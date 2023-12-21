import { Human } from "./human.interface";
import { Role } from "./role.interface";

export interface User{
  id: number;
  username: string;
  password: string;
  session?: string;
  // human_id?: number;
  rol?: Role;
  human?: Human;

}
