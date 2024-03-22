import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  year = 2024;
  contactInfo = {
    email: 'contact@sportapp.com',
    phone: '+1 234-567-890'
  };

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/sportapp' },
    { icon: 'fab fa-twitter', url: 'https://www.twitter.com/sportapp' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/sportapp' }
  ];

  constructor() { }

}
