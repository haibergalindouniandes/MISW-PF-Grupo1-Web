import { Component } from '@angular/core';
import { SigninFormComponent } from '../../components/signin-form/signin-form.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninFormComponent, HeadersComponent, FooterComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

}
