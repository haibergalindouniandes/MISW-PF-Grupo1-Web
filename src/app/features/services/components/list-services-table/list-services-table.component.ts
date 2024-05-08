import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { Service } from '../../../../core/models/services/service';
import { Notification } from '../../../../core/models/services/notification';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { ListServicesUserService } from '../../../../core/services/services/list-services-user.service';

@Component({
  selector: 'app-list-services-table',
  standalone: true,
  imports: [CommonModule, ListServicesComponent],
  templateUrl: './list-services-table.component.html',
  styleUrls: ['./list-services-table.component.scss']
})
export class ListServicesComponent implements OnInit {

  servicesList: Array<Service> = [];
  selectedService: Service | undefined;

  constructor(
    public toastr: ToastrService,
    private emitterService: EmitterService,
    private listService: ListServicesUserService,
    private listDetailSharedService: ListDetailSharedService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.servicesList = [];
    /* istanbul ignore next */
    this.listService.getServicesByUser()
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
    console.log(this.selectedService)
    this.sendDataSharedService(service);
    this.emitterService.setService(this.selectedService);
  }

  sendDataSharedService(service: Service) {
    this.listDetailSharedService.setDataService(service);
  }
}
