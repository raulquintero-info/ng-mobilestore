export interface LoginResponse {
  id:       number;
  username: string;
  token:    string;
  rol:      Rol;
  name:     null;
}

export interface Rol {
  id:                       number;
  name:                     string;
}
