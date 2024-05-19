import { Service } from "../page-objects/services/service";
import { signinUser } from "./e2e-utils.spec";

describe('List And Detail service e2e test', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Ejecución de la prueba de validación de la tabla servicio y el detalle
    let columns = ["Nombre:", "Fecha:", "Hora:", "Costo:", "Zona:", "Descripción:"];
    let countServices = 0;
    let poRegisterService = new Service();
    poRegisterService.visit('/services/list-detail-user');
    poRegisterService.shouldBeAlistOfScheduledUserServicesAndDetails(countServices, columns);
  })

});
