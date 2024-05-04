import { Component } from '@angular/core';
import { SchedulerFormComponent } from '../../components/scheduler-form/scheduler-form.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, SchedulerFormComponent],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent {

}
