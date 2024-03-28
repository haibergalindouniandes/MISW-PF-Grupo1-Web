export class Service {
  id: string;
  rut: string;
  servicio: string;
  descripcion: string;
  licencia: string;
  experiencia: number;
  recomendaciones: string;
  id_usuario: string;
  fecha_creacion: string;
  fecha_actualizacion: string;

  constructor(
    id: string,
    rut: string,
    servicio: string,
    descripcion: string,
    licencia: string,
    experiencia: number,
    recomendaciones: string,
    id_usuario: string,
    fecha_creacion: string,
    fecha_actualizacion: string
  ) {
    this.id = id;
    this.rut = rut;
    this.servicio = servicio;
    this.descripcion = descripcion;
    this.licencia = licencia;
    this.experiencia = experiencia;
    this.recomendaciones = recomendaciones;
    this.id_usuario = id_usuario;
    this.fecha_creacion = fecha_creacion;
    this.fecha_actualizacion = fecha_actualizacion;
  }
}
