export class Notification {
  descripcion?: string;
  id_servicio?: string;
  emails?: string[];
  tipo?: string;
  usuario?: string;

  constructor(
    descripcion?: string,
    id_servicio?: string,
    emails?: string[],
    tipo?: string,
    usuario?: string
  ) {
    this.descripcion = descripcion;
    this.id_servicio = id_servicio;
    this.emails = emails;
    this.tipo = tipo;
    this.usuario = usuario;
  }
}

