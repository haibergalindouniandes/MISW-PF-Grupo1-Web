import { Service } from "../page-objects/services/service";
import { registerService, signinUser } from "./e2e-utils.spec";

describe('List And Detail service e2e test', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'prestador2024@uniandes.edu.co'
    let password = 'Prestador2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Creación de servicios
    for (let index = 0; index < 2; index++) {
      registerService();
    }
    // Ejecución de la prueba de validación de la tabla servicio y el detalle
    let columns = ["Nombre:", "Fecha:", "Hora:", "Costo:", "Zona:", "Descripción:"];
    let countServices = 1;
    let poRegisterService = new Service();
    poRegisterService.visit('/services/list-detail-provider');
    poRegisterService.shouldBeAlistOfServicesAndDetails(countServices, columns);
  })

});
