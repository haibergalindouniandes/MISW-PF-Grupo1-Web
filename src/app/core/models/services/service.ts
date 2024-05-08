export class Service {
  id: string;
  nombre: string;
  lugar: string;
  costo: string;
  descripcion?: string;
  estado?: string;
  fecha?: string;
  frecuencia?: string;
  horario?: string[];
  id_usuario?: string;
  nombre_usuario?: string;
  numero_maximo_participantes?: number;
  numero_minimo_participantes?: number;

  constructor(
    id: string,
    nombre: string,
    lugar: string,
    costo: string,
    descripcion?: string,
    estado?: string,
    fecha?: string,
    frecuencia?: string,
    horario?: string[],
    id_usuario?: string,
    nombre_usuario?: string,
    numero_maximo_participantes?: number,
    numero_minimo_participantes?: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.lugar = lugar;
    this.costo = costo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fecha = fecha;
    this.frecuencia = frecuencia;
    this.horario = horario;
    this.id_usuario = id_usuario;
    this.nombre_usuario = nombre_usuario;
    this.numero_maximo_participantes = numero_maximo_participantes;
    this.numero_minimo_participantes = numero_minimo_participantes;
  }
}
