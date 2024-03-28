export class Register {
  nombre: string;
  descripcion: string;
  frecuencia: string;
  costo: string;
  numero_minimo_participantes: number;
  numero_maximo_participantes: number;
  lugar: string;
  fecha: string;
  id_usuario: string;

  constructor(
    nombre: string,
    descripcion: string,
    frecuencia: string,
    costo: string,
    numero_minimo_participantes: number,
    numero_maximo_participantes: number,
    lugar: string,
    fecha: string,
    id_usuario: string
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.frecuencia = frecuencia;
    this.costo = costo;
    this.numero_minimo_participantes = numero_minimo_participantes;
    this.numero_maximo_participantes = numero_maximo_participantes;
    this.lugar = lugar;
    this.fecha = fecha;
    this.id_usuario = id_usuario;
  }
}
