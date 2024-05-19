import { Service } from "../page-objects/services/service";
import { signinUser } from "./e2e-utils.spec";

describe('Registration feeding results e2e test', () => {
  it('Should allow you to register the feeding results successfully', () => {
    // Asignacion de credenciales
    let email = 'prestador2024@uniandes.edu.co'
    let password = 'Prestador2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Asignacion de valores de la tabla de resultados
    let columns = ["Nombre:", "Fecha:", "Hora:", "Costo:", "Zona:", "Descripción:"];
    let countServices = 1;
    // Consulta servicios
    let poRegisterService = new Service();
    poRegisterService.visit('/services/list-detail-provider');
    poRegisterService.shouldBeAlistOfServicesAndDetails(countServices, columns);
    // Envio notificacón masiva
    let message = 'No te pierdas el evento mas grande de la historia del deporte, te esperamos no faltes! Mensaje enviado desde pruebas e2e';
    poRegisterService.shouldSendMasiveNotification(message);
  })

});
