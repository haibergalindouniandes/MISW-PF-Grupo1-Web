import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [CardComponent, FooterComponent, HeadersComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss'
})
export class InitComponent {

}
