export class Signup {
  usuario: string;
  contrasena: string;
  nombres: string;
  peso: number;
  apellidos: string;
  edad: number;
  tipo_documento: string;
  altura: number;
  numero_documento: string;
  pais_nacimiento: string;
  ciudad_nacimiento: string;
  genero: string;
  pais_residencia: string;
  ciudad_residencia: string;
  deportes: Array<string>;
  antiguedad: number;
  tipo_plan: string;
  tipo_usuario: string;


  constructor(
    usuario: string,
    contrasena: string,
    nombres: string,
    peso: number,
    apellidos: string,
    edad: number,
    tipo_documento: string,
    altura: number,
    numero_documento: string,
    pais_nacimiento: string,
    ciudad_nacimiento: string,
    genero: string,
    pais_residencia: string,
    ciudad_residencia: string,
    deportes: Array<string>,
    antiguedad: number,
    tipo_plan: string,
    tipo_usuario: string

  ) {
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.nombres = nombres;
    this.peso = peso;
    this.apellidos = apellidos;
    this.edad = edad;
    this.tipo_documento = tipo_documento;
    this.altura = altura;
    this.numero_documento = numero_documento;
    this.pais_nacimiento = pais_nacimiento;
    this.ciudad_nacimiento = ciudad_nacimiento;
    this.genero = genero;
    this.pais_residencia = pais_residencia;
    this.ciudad_residencia = ciudad_residencia;
    this.deportes = deportes;
    this.antiguedad = antiguedad
    this.tipo_plan = tipo_plan
    this.tipo_usuario = tipo_usuario
  }
}
