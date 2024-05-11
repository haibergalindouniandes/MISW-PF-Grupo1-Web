import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Service } from '../../../../core/models/services/service';
import { SchedulerService } from '../../../../core/services/services/scheduler/scheduler.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { Scheduler } from '../../../../core/models/services/scheduler';
import { ToastrService } from 'ngx-toastr';
import { SchedulerServiceListComponent } from '../../components/scheduler-service-list/scheduler-service-list.component';
import { SchedulerDetailCardComponent } from "../../components/scheduler-detail-card/scheduler-detail-card.component";
import { DetailService } from '../../../../core/services/services/detail.service';
import { switchMap } from 'rxjs';
import { EmitterHour } from '../../../../core/emitters/hour-emitter';

@Component({
    selector: 'app-scheduler',
    standalone: true,
    templateUrl: './scheduler.component.html',
    styleUrl: './scheduler.component.scss',
    imports: [HeadersComponent, FooterComponent, SchedulerServiceListComponent,  SchedulerDetailCardComponent]
})
export class SchedulerComponent implements OnInit {

  selectedService: Service | undefined;
  horarioSeleccionado: string | undefined;


  constructor(    
    public toastr: ToastrService,
    private schedulerService: SchedulerService,
    private emitterService: EmitterService,
    private detailService: DetailService,
    private emitterhorario: EmitterHour
    ) { }

  ngOnInit() {
    this.emitterService.serviceEmitter.subscribe(
      data => {
        this.selectedService = data;
        this.getDetailServices(this.selectedService.id)
      }
    );
    this.emitterhorario.hourEmitter.subscribe(
      data => {
        this.horarioSeleccionado = data;
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
        this.splitDate(this.selectedService.fecha!),
        this.extractHour(this.horarioSeleccionado)
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
  
  splitDate(date: any): string {
    console.log('SPLIT DATE')
    console.log(date)
    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().split('T')[0];
    return formattedDate;
  }

  extractHour(hour: any): string {
    console.log('extractHour')
    console.log(hour)
    let hora : string = '';
    if (hour.split(':')[0].length==1){
      hora='0'+hour.split(':')[0]
    }else{
      hora=hour.split(':')[0]
    }
    const formattedHour = hora+':'+hour.split(':')[1]+':00';
    console.log(formattedHour)
    return formattedHour;
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
