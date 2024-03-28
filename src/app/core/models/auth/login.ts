export class Login {
  id: number;
  name: string;
  email: string;
  rol: string;
  token: string;

  constructor(
    id: number,
    name: string,
    email: string,
    rol: string,
    token: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.rol = rol;
    this.token = token;
  }
}
