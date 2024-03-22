import { Signin } from "../page-objects/auth/signin";

describe('Signin user e2e test', () => {
  it('Should allow to signin a user', () => {
    let email = 'administrador@sportapp.com'
    let password = 'SportApp1234*'
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.setInputEmail(email);
    poSignin.setInputPassword(password);
    poSignin.clickInButtonLogin();
    cy.wait(500);
    poSignin.getToastSuccessConfirmation().should("be.visible");
    poSignin.getToastSuccessConfirmation().then((el) => {
      expect(el[0].innerText).to.include('Bienvenido');
    });
  })
})
