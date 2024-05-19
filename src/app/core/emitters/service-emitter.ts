import { Injectable, Output, EventEmitter } from '@angular/core';
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
    this.cambiosService();
  }

  // Emitimos los cambio de this.persona.
  cambiosService() {
    this.serviceEmitter.emit(this.service);
  }
}
