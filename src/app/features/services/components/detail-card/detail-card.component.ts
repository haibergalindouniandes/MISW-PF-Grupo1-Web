import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { Service } from '../../../../core/models/services/service';
import { DetailService } from '../../../../core/services/services/detail.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule, DetailCardComponent],
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  selectedService: Service | undefined;

  constructor(
    private listDetailSharedService: ListDetailSharedService,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.listDetailSharedService.getDataService().subscribe(data => {
      this.selectedService = data;
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
          return [];
        })
      )
      .subscribe(() => { });
  }

}
