import { Service } from "../page-objects/services/service";
import { registerService, signinUser } from "./e2e-utils.spec";

describe('Registration service e2e test', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'prestador2024@uniandes.edu.co'
    let password = 'Prestador2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Ejecución de la prueba de validación de errores del formulario del registro de servicio
    let validationErrors = 6;
    let poRegisterService = new Service();
    poRegisterService.visit('/services/register');
    poRegisterService.shouldValidateMessagesErrorInForm(validationErrors);
  })

  it('Should allow you to register a service successfully', () => {
    // Asignacion de credenciales
    let email = 'prestador2024@uniandes.edu.co'
    let password = 'Prestador2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Registrar servicio
    registerService();
  })

});
