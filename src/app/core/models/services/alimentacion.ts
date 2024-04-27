export class Alimentacion {
    fecha_actualizacion: string;
    fecha_creacion: string;
    id: string;
    id_usuario: string;
    numero_semanas: number;
    plan_alimentacion: PlanAlimentacion;

    constructor(
        fecha_actualizacion: string,
        fecha_creacion: string,
        id: string,
        id_usuario: string,
        numero_semanas: number,
        plan_alimentacion: PlanAlimentacion
      ) {
        this.fecha_actualizacion = fecha_actualizacion;
        this.fecha_creacion = fecha_creacion;
        this.id = id;
        this.id_usuario = id_usuario;
        this.numero_semanas = numero_semanas;
        this.plan_alimentacion = plan_alimentacion;
      }
    
  }
  
  export class PlanAlimentacion {
    alimentacion: string;
    id: string;
    lunes: number;
    martes: number;
    miercoles: number;
    jueves: number;
    viernes: number;
    sabado: number;
    domingo: number;
   
    constructor(
        alimentacion: string,
        id: string,
        lunes: number,
        martes: number,
        miercoles: number,
        jueves: number,
        viernes: number,
        sabado: number,
        domingo: number,
      ) {
        this.alimentacion = alimentacion;
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