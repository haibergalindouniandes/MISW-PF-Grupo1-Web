import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit {

  constructor(
    public router: Router,
    public toastr: ToastrService) { }

  isLoggedIn() {
    if (sessionStorage.getItem('username') !== null) {
      return true;
    }
    return false;
  };

  hasPermissionsAsProvider() {
    if (sessionStorage.getItem('rol') == environment.allowedRoleProvider) {
      return true;
    }
    return false;
  };

  hasPermissionsAsUser() {
    if (sessionStorage.getItem('rol') == environment.allowedRoleUser) {
      return true;
    }
    return false;
  };

  logout() {
    sessionStorage.clear();
    this.toastr.success('Confirmación', 'Se cerró sesión correctamente', { closeButton: true });
    /* istanbul ignore next */
    this.router.navigate(['/auth/signin']).then(() => {
      window.location.reload();
    });
  }

  /* istanbul ignore next */
  changeLanguage(language: string): void {
    const currentPath = this.router.url;
    if (!currentPath.includes(`/${language}/`)) {
      const newPath = `/${language}${currentPath}`;
      window.location.href = newPath
    }
  }

  ngOnInit(): void { }

}
