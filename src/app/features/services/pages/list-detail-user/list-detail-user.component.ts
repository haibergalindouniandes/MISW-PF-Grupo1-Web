import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailCardComponent } from '../../components/detail-card/detail-card.component';
import { ListScheduledServicesTableComponent } from '../../components/list-scheduled-services-table/list-scheduled-services-table.component';
import { SchedulerService } from '../../../../core/services/services/scheduler/scheduler.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { Service } from '../../../../core/models/services/service';
import { Scheduler } from '../../../../core/models/services/scheduler';

@Component({
  selector: 'app-list-services-table-detail',
  standalone: true,
  imports: [CommonModule, HeadersComponent, FooterComponent, ListDetailUserComponent, ListScheduledServicesTableComponent, DetailCardComponent],
  templateUrl: './list-detail-user.component.html',
  styleUrls: ['./list-detail-user.component.scss']
})
export class ListDetailUserComponent implements OnInit {

  selectedService: Service | undefined;
  toastr: any;


  constructor(    
    private schedulerService: SchedulerService,
    private emitterService: EmitterService
    ) { }

  ngOnInit() {
    this.emitterService.serviceEmitter.subscribe(
      data => {
        this.selectedService = data;
      }
    );
  }

  addSchedulerService() {    
    console.log(':::::::::::addScheduleSevice:::::::::');
    console.log(this.selectedService);
    if (this.selectedService!=null) {
      
           
      let scheduleService = new Scheduler(
        sessionStorage.getItem('user_id')!,
        this.selectedService.id,
        sessionStorage.getItem('email')!,
        this.selectedService.fecha!,
        '12:04:04'
      );
      console.log('secheduleService=======');
      console.log(scheduleService);
      this.schedulerService.schedulerService(scheduleService)
        .subscribe(schedulerSucess => {
          this.toastr.success('Confirmation', 'Se agendo servicio exitosamente!', { closeButton: true });          
          console.log(schedulerSucess);
        });
    }else{
      console.log('Servicio no seleccionado');
      this.toastr.warning('Confirmation', 'No se ha seleccionado servicio!', { closeButton: true });
    }

  }
}
