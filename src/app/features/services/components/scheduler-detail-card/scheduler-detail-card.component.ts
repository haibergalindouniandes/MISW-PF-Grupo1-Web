import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../../../core/models/services/service';
import { DetailService } from '../../../../core/services/services/detail.service';
import { switchMap } from 'rxjs';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { EmitterHour } from '../../../../core/emitters/hour-emitter';

@Component({
  selector: 'app-scheduler-detail-card',
  standalone: true,
  imports: [CommonModule, SchedulerDetailCardComponent],
  templateUrl: './scheduler-detail-card.component.html',
  styleUrls: ['./scheduler-detail-card.component.scss']
})
export class SchedulerDetailCardComponent implements OnInit {

  selectedService: Service | undefined;
  horarioSeleccionado: string | undefined;
  horario: string[] | undefined = [];


  constructor(
    private emitterService: EmitterService,
    private detailService: DetailService,
    private emitterhorario: EmitterHour,
  ) { }

  ngOnInit() {
    this.emitterService.serviceEmitter.subscribe(data => {
      console.log(':::::::::Scheduler card detail::::::::::::::')
      console.log(data)
      this.selectedService = data;
      console.log(this.selectedService)
      this.getDetailServices(this.selectedService.id);
      console.log(':::::::::Scheduler card detail service::::::::::::::');
      console.log(this.selectedService);
    });

  }

  splitDate(date: any): string {
    console.log('SPLIT DATE')
    console.log(date)
    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().split('T')[0];
    return formattedDate;
  }

  getSchedule(schedule: any): string {
    if (schedule.length === 1) {
      return schedule[0];
    } else {
      const firstElement = schedule[0];
      const lastElement = schedule[schedule.length - 1];
      return `${firstElement} - ${lastElement}`;
    }
  }

  getDetailServices(serviceId: string) {
    this.detailService.getServiceById(serviceId)
      .pipe(
        switchMap(servicesSuccess => {
          console.log(':::::::::get Detail service ::::::::')
          console.log(servicesSuccess)
          this.selectedService = servicesSuccess;  
          console.log(':::::Horarios');
          console.log(this.horario);
          this.horario=this.selectedService.horario        
          return [];
        })
      )
      .subscribe(() => { });
  }

  setHourSelected(hour:string){    
    this.horarioSeleccionado=hour;
    console.log(':::::Horario seleccionado');
    console.log(this.horarioSeleccionado);
    this.emitterhorario.setHour(this.horarioSeleccionado);
  }

}
