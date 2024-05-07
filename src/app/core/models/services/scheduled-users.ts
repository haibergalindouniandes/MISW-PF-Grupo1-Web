export class ScheduledUsers {
  ciudadResidencia: string;
  email: string;
  fecha: string;
  hora: string;
  id_usuario: string;
  nombre_usuario: string;
  pais_residencia: string;

  constructor(
    ciudadResidencia: string,
    email: string,
    fecha: string,
    hora: string,
    id_usuario: string,
    nombre_usuario: string,
    pais_residencia: string
  ) {
    this.ciudadResidencia = ciudadResidencia;
    this.email = email;
    this.fecha = fecha;
    this.hora = hora;
    this.id_usuario = id_usuario;
    this.nombre_usuario = nombre_usuario;
    this.pais_residencia = pais_residencia;
  }
}
