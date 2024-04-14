export class Signin {
  visit(page: string) {
    cy.visit(page);
  }

  private getInputEmail() {
    return cy.get('#email')
  }

  private getInputPassword() {
    return cy.get('#password')
  }

  private getButtonLogin() {
    return cy.get(`button[id='btn-login']`);
  }

  private getToastSuccessConfirmation() {
    return cy.get('.toast-title.ng-star-inserted');
  }

  private setInputEmail(email: string) {
    this.getInputEmail().clear().type(email);
  }

  private setInputPassword(password: string) {
    this.getInputPassword().clear().type(password);
  }

  private clickInButtonLogin() {
    this.getButtonLogin().click();
  }

  private shouldHaveASigninForm() {
    this.getInputEmail().should('be.visible');
    this.getInputPassword().should('be.visible');
    this.getButtonLogin().should('be.visible');
  }

  private fillSigninForm(validEmail: string, validPassword: string) {
    this.setInputEmail(validEmail);
    this.setInputPassword(validPassword);
    this.clickInButtonLogin();
  }

  private validateToastSuccessConfirmation(content: string){
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  shouldSigninSuccess(validEmail: string, validPassword: string) {
    this.shouldHaveASigninForm();
    this.fillSigninForm(validEmail, validPassword);
    cy.wait(1000);
    this.validateToastSuccessConfirmation('Bienvenido')
  }

}
