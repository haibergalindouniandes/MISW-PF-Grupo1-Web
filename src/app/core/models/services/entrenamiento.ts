export class Entrenamiento {
  entrenamiento: string;
  fecha_actualizacion: string;
  fecha_creacion: string;
  id: string;
  id_usuario: string;
  numero_semanas: number;
  plan_entrenamiento: PlanEntrenamiento;

  constructor(
    entrenamiento: string,
    fecha_actualizacion: string,
    fecha_creacion: string,
    id: string,
    id_usuario: string,
    numero_semanas: number,
    plan_entrenamiento: PlanEntrenamiento
  ) {
    this.entrenamiento = entrenamiento;
    this.fecha_actualizacion = fecha_actualizacion;
    this.fecha_creacion = fecha_creacion;
    this.id = id;
    this.id_usuario = id_usuario;
    this.numero_semanas = numero_semanas;
    this.plan_entrenamiento = plan_entrenamiento;
  }

}



export class PlanEntrenamiento {
  domingo: number;
  entrenamiento: string;
  id: string;
  jueves: number;
  lunes: number;
  martes: number;
  miercoles: number;
  sabado: number;
  viernes: number;

  constructor(
    entrenamiento: string,
    id: string,
    lunes: number,
    martes: number,
    miercoles: number,
    jueves: number,
    viernes: number,
    sabado: number,
    domingo: number,
  ) {
    this.entrenamiento = entrenamiento;
    this.id = id;
    this.lunes = lunes;
    this.martes = martes;
    this.miercoles = miercoles;
    this.jueves = jueves;
    this.viernes = viernes;
    this.sabado = sabado;
    this.domingo = domingo;
  }
}