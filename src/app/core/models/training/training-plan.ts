export class TrainingPlan {
  entrenamiento: string
  fecha_actualizacion?: string;
  fecha_creacion?: string;
  id?: string;
  id_usuario: string;
  numero_semanas: number;
  plan_entrenamiento: {
    domingo: number;
    entrenamiento?: string;
    id?: string;
    jueves: number;
    lunes: number;
    martes: number;
    miercoles: number;
    sabado: number;
    viernes: number;
  };

  constructor(
    entrenamiento: string,
    id_usuario: string,
    numero_semanas: number,
    plan_entrenamiento: {
      domingo: number;
      entrenamiento?: string;
      id?: string;
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
    this.entrenamiento = entrenamiento;
    this.fecha_actualizacion = fecha_actualizacion;
    this.fecha_creacion = fecha_creacion;
    this.id = id;
    this.id_usuario = id_usuario;
    this.numero_semanas = numero_semanas;
    this.plan_entrenamiento = plan_entrenamiento;
  }
}
