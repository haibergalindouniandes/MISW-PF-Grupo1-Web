import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/services/service';


@Injectable({
  providedIn: 'root'
})

export class EmitterService {

  // Creamos la persona
  service: Service | undefined;
  
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  serviceEmitter = new EventEmitter<Service>();


  constructor() { }

  // Cambiamos el atributo this.persona y llamamos a cambioPersona().
  setService(selectedService: Service) {
    this.service = selectedService;
    console.log(':::::::::::Emitter::::::::::')
    console.log(this.service)
    this.cambiosService();
  }

  // Emitimos los cambio de this.persona.
  cambiosService() {
    console.log('emit====')
    console.log(this.service)
    this.serviceEmitter.emit(this.service);
  }
}