import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ListComponent } from '../../components/list/list.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailComponent } from '../../components/detail/detail.component';
import { Scheduler } from '../../../../core/models/services/scheduler';
import { SchedulerService } from '../../../../core/services/services/scheduler/scheduler.service';
import { Service } from '../../../../core/models/services/service';
import { EmitterService } from '../../../../core/emitters/service-emitter';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule, HeadersComponent, FooterComponent, ListDetailComponent, ListComponent, DetailComponent],
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  selectedService: Service | undefined;
  listComponents: ListComponent | undefined;

  constructor(    
    public toastr: ToastrService,
    private schedulerService: SchedulerService,
    private emitterService: EmitterService
    ) { }
  
  ngOnInit(): void { 
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
