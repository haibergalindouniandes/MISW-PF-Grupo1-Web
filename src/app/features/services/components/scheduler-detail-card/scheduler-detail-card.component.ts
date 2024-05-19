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
      this.selectedService = data;
      this.getDetailServices(this.selectedService.id);
    });

  }

  splitDate(date: any): string {
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
          this.selectedService = servicesSuccess;
          this.horario=this.selectedService.horario
          return [];
        })
      )
      .subscribe(() => { });
  }

  setHourSelected(hour:string){
    this.horarioSeleccionado=hour;
    this.emitterhorario.setHour(this.horarioSeleccionado);
  }

}
