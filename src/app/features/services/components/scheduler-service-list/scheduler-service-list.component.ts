import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../../../core/models/services/service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { ListService } from '../../../../core/services/services/list.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-scheduler-service-list',
  standalone: true,
  imports: [CommonModule, SchedulerServiceListComponent],//, ReactiveFormsModule, FormsModule],
  templateUrl: './scheduler-service-list.component.html',
  styleUrl: './scheduler-service-list.component.scss'
})
export class SchedulerServiceListComponent implements OnInit {

  servicesList: Array<Service> = [];
  selectedService: Service | undefined;

  constructor(
    public toastr: ToastrService,
    private emitterService: EmitterService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.servicesList = [];
    /* istanbul ignore next */
    this.listService.getServices()
      .pipe(
        switchMap(listServicesSuccess => {
          this.servicesList = listServicesSuccess;
          return [];
        })
      )
      .subscribe(() => { });
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

  onSelectedService(service: Service): void {
    this.selectedService = service;
    this.emitterService.setService(service);
  }

}
