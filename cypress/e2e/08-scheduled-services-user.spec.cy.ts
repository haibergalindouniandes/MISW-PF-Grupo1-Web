import { scheduledUserService, signinUser } from "./e2e-utils.spec";

describe('List and Detail to schedule service e2e test', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Agendamos servicio
    scheduledUserService()
  })

});
