/* istanbul ignore next */
export class Scheduler {
  id_usuario: string;
  id_servicio: string;
  email: string;
  fecha: string;
  hora: string;
  
  constructor(
    id_usuario: string,
    id_servicio: string,
    email: string,
    fecha: string,
    hora: string    
  ) {
    this.id_usuario = id_usuario;
    this.id_servicio = id_servicio;
    this.email = email;
    this.fecha = fecha;
    this.hora = hora;
  }
}
