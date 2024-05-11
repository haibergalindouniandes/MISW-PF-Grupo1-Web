import { registerFeedingPlan, signinUser } from "./e2e-utils.spec";

describe('Registration training plan e2e test', () => {
  it('Should allow you to register training plan successfully', () => {
    cy.viewport(1920, 1080)
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    signinUser(email, password);
    // Ejecución del registro
    registerFeedingPlan();
  })

});
