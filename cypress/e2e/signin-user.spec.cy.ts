import { Signin } from "../page-objects/auth/signin";

describe('Signin user e2e test', () => {
  it('Should allow to signin a user', () => {
    // Asignacion de valores
    let email = 'prestador2024@uniandes.edu.co'
    let password = 'Prestador2*24'
    // Ejecución de prueba
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
  })
});
