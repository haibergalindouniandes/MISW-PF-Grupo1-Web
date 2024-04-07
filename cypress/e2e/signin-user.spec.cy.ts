import { Signin } from "../page-objects/auth/signin";

describe('Signin user e2e test', () => {
  it('Should allow to signin a user', () => {
    // Asignacion de valores
    let email = 'prestador0001'
    let password = 'prestador0001'
    // Ejecución de prueba
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
  })
});
