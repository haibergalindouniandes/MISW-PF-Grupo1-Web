import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { ToastrService } from 'ngx-toastr';
import { ListScheduledServicesService } from '../../../../core/services/services/list-scheduled-services.service';
import { switchMap } from 'rxjs';
import { Service } from '../../../../core/models/services/service';

@Component({
  selector: 'app-list-scheduled-services-table',
  standalone: true,
  imports: [CommonModule, ListScheduledServicesTableComponent],
  templateUrl: './list-scheduled-services-table.component.html',
  styleUrls: ['./list-scheduled-services-table.component.scss']
})
export class ListScheduledServicesTableComponent implements OnInit {

  servicesList: Array<Service> = [];
  selectedService: Service | undefined;

  constructor(
    public toastr: ToastrService,
    private listService: ListScheduledServicesService,
    private listDetailSharedService: ListDetailSharedService
  ) { }

  ngOnInit() {
    this.getScheduledServicesByUser();
  }

  getScheduledServicesByUser() {
    this.servicesList = [];
    /* istanbul ignore next */
    this.listService.getScheduledServicesByUser()
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
    this.sendDataSharedService(service);
  }

  sendDataSharedService(service: Service) {
    this.listDetailSharedService.setDataService(service);
  }

}
