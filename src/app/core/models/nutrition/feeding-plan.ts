export class FeedingPlan {
  fecha_actualizacion?: string;
  fecha_creacion?: string;
  id?: string;
  id_usuario: string;
  numero_semanas: number;
  plan_alimentacion: {
    alimentacion: string;
    domingo: number;
    id: string;
    jueves: number;
    lunes: number;
    martes: number;
    miercoles: number;
    sabado: number;
    viernes: number;
  };

  constructor(
    id_usuario: string,
    numero_semanas: number,
    plan_alimentacion: {
      alimentacion: string;
      domingo: number;
      id: string;
      jueves: number;
      lunes: number;
      martes: number;
      miercoles: number;
      sabado: number;
      viernes: number;
    },
    fecha_actualizacion?: string,
    fecha_creacion?: string,
    id?: string
  ) {
    this.fecha_actualizacion = fecha_actualizacion;
    this.fecha_creacion = fecha_creacion;
    this.id = id;
    this.id_usuario = id_usuario;
    this.numero_semanas = numero_semanas;
    this.plan_alimentacion = plan_alimentacion;
  }
}
