export class Login {
  id: string;
  nombres: string;
  tipo_plan: string;
  tipo_usuario: string;
  token: string;
  

  constructor(
    id: string,
    nombres: string,
    tipo_plan: string,
    tipo_usuario: string,
    token: string
  ) {
    this.id = id;
    this.nombres = nombres;
    this.tipo_plan = tipo_plan;
    this.tipo_usuario = tipo_usuario;
    this.token = token;
  }
}
