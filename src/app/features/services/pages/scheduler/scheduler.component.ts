import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Service } from '../../../../core/models/services/service';
import { SchedulerService } from '../../../../core/services/services/scheduler/scheduler.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { Scheduler } from '../../../../core/models/services/scheduler';
import { ToastrService } from 'ngx-toastr';
import { SchedulerServiceListComponent } from '../../components/scheduler-service-list/scheduler-service-list.component';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, SchedulerServiceListComponent],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit {

  selectedService: Service | undefined;


  constructor(    
    public toastr: ToastrService,
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
