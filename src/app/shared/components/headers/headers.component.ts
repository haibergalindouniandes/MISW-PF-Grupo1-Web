import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, MatToolbarModule, MatButtonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  isLoggedIn() {
    if (sessionStorage.getItem('username') !== null) {
      return true;
    }
    return false;
  };

  logout() {
    sessionStorage.removeItem('username');
    this.toastr.success('Confirmation', 'Se cerró sesión correctamente', { closeButton: true });
    this.router.navigate(['/'])
  }

  ngOnInit(): void { }

}
