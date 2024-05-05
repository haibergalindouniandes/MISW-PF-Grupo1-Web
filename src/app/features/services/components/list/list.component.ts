import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ListService } from '../../../../core/services/services/list.service';
import { switchMap } from 'rxjs';
import { Service } from '../../../../core/models/services/service';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  servicesList: Array<Service> = [];
  selectedService: Service | undefined;

  constructor(
    public toastr: ToastrService,
    private listService: ListService,
    private listDetailSharedService: ListDetailSharedService,
    private emitterService: EmitterService
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
    console.log(this.selectedService)
    this.sendDataSharedService(service);
    this.emitterService.setService(this.selectedService);
  }

  sendDataSharedService(service: Service) {
    this.listDetailSharedService.setData(service);
  }
}
