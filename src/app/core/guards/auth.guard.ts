import { CanActivateFn } from '@angular/router';
import { Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const injector = Injector.create({providers: [{provide: ToastrService, deps: []}]});
  const toastr: ToastrService = injector.get(ToastrService);

  if (sessionStorage.getItem('username') !== null) {
    return true;
  }
  toastr.error('Para acceder a este recurso debe loggearse', 'No autorizado', { closeButton: true });
  return false;
};
