export class Login {
  id: string;
  nombres: string;
  apellidos: string;
  tipo_identificacion: string;
  numero_identificacion: string;
  sexo: string;
  edad: number;
  estatura: number;
  peso: number;
  enfermedades_cardiovasculares: boolean;
  practica_deporte: string;
  proposito: string;
  pais: string;
  departamento: string;
  ciudad: string;
  email: string;
  password: string;
  rol: string;
  plan: string;

  constructor(
    id: string,
    nombres: string,
    apellidos: string,
    tipo_identificacion: string,
    numero_identificacion: string,
    sexo: string,
    edad: number,
    estatura: number,
    peso: number,
    enfermedades_cardiovasculares: boolean,
    practica_deporte: string,
    proposito: string,
    pais: string,
    departamento: string,
    ciudad: string,
    email: string,
    password: string,
    rol: string,
    plan: string
  ) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipo_identificacion = tipo_identificacion;
    this.numero_identificacion = numero_identificacion;
    this.sexo = sexo;
    this.edad = edad;
    this.estatura = estatura;
    this.peso = peso;
    this.enfermedades_cardiovasculares = enfermedades_cardiovasculares;
    this.practica_deporte = practica_deporte;
    this.proposito = proposito;
    this.pais = pais;
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.email = email;
    this.password = password;
    this.rol = rol;
    this.plan = plan;
  }
}
