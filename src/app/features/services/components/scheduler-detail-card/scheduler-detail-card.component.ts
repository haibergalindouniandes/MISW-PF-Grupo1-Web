import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../../../core/models/services/service';
import { DetailService } from '../../../../core/services/services/detail.service';
import { switchMap } from 'rxjs';
import { EmitterService } from '../../../../core/emitters/service-emitter';

@Component({
  selector: 'app-scheduler-detail-card',
  standalone: true,
  imports: [CommonModule, SchedulerDetailCardComponent],
  templateUrl: './scheduler-detail-card.component.html',
  styleUrls: ['./scheduler-detail-card.component.scss']
})
export class SchedulerDetailCardComponent implements OnInit {

  selectedService: Service | undefined;

  constructor(
    private emitterService: EmitterService,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.emitterService.serviceEmitter.subscribe(data => {
      console.log(':::::::::Scheduler card detail::::::::::::::')
      console.log(data)
      this.selectedService = data;
      console.log(this.selectedService)
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
          console.log(':::::::::get Detail service ::::::::')
          console.log(servicesSuccess)
          this.selectedService = servicesSuccess;
          return [];
        })
      )
      .subscribe(() => { });
  }

}
