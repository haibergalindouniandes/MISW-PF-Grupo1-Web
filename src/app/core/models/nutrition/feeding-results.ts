export class FeedingResults {

  id?: string;
  calorias_1: string;
  calorias_2: string;
  calorias_3: string;
  fecha: string;
  id_usuario: string;
  ml_agua: string;

  constructor(
    id: string | undefined,
    calorias_1: string,
    calorias_2: string,
    calorias_3: string,
    fecha: string,
    id_usuario: string,
    ml_agua: string
  ) {
    this.id = id;
    this.calorias_1 = calorias_1;
    this.calorias_2 = calorias_2;
    this.calorias_3 = calorias_3;
    this.fecha = fecha;
    this.id_usuario = id_usuario;
    this.ml_agua = ml_agua;
  }
}
