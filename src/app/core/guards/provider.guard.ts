import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProviderGuard implements CanActivate {

  constructor(private toastr: ToastrService, private router: Router) {}

  canActivate(): boolean {
    if (sessionStorage.getItem('rol') === 'PRESTADOR') {
      return true;
    } else {
      this.toastr.error('No cuenta con los permisos necesarios para acceder a este recurso', 'No autorizado', { closeButton: true });
      this.router.navigate(['/']);
      return false;
    }
  }
}
