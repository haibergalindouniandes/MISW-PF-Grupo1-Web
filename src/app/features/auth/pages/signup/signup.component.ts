import { Component, OnInit } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupFormComponent, HeadersComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
