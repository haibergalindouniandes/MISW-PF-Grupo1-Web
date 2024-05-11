import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register-feeding-plan',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, RegisterFormComponent],
  templateUrl: './register-feeding-plan.component.html',
  styleUrls: ['./register-feeding-plan.component.css']
})
export class RegisterFeedingPlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
