export class Signin {
  visit(page: string) {
    cy.visit(page);
  }

  private getInputEmail() {
    return cy.get('#inpt-email')
  }

  private getInputPassword() {
    return cy.get('#inpt-password')
  }

  private getButtonLogin() {
    return cy.get(`button[id='btn-login']`);
  }

  getToastSuccessConfirmation() {
    return cy.get('.toast-title.ng-star-inserted');
  }

  setInputEmail(email: string) {
    this.getInputEmail().clear().type(email);
  }

  setInputPassword(password: string) {
    this.getInputPassword().clear().type(password);
  }

  clickInButtonLogin() {
    this.getButtonLogin().click();
  }


}
