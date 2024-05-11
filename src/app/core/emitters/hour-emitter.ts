import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


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
    console.log(':::::::::::Emitter HOUR::::::::::')
    console.log(this.horario)
    this.cambiosHorario();
  }

  // Emitimos los cambio de this.persona.
  cambiosHorario() {
    console.log('emit====')
    console.log(this.horario)
    this.hourEmitter.emit(this.horario);
  }
}