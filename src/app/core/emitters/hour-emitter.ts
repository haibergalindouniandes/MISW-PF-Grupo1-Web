import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmitterHour {

  // Creamos la persona
  horario: string | undefined;
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  hourEmitter = new EventEmitter<string>();

  constructor() { }

  // Cambiamos el atributo this.persona y llamamos a cambioPersona().
  setHour(hora: string) {
    this.horario = hora;
    this.cambiosHorario();
  }

  // Emitimos los cambio de this.persona.
  cambiosHorario() {
    this.hourEmitter.emit(this.horario);
  }
}
