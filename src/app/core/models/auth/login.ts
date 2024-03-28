export class Login {
  id: number;
  nombres: string;
  token: string;
  

  constructor(
    id: number,
    nombres: string,
    token: string
  ) {
    this.id = id;
    this.nombres = nombres;
    this.token = token;
  }
}
