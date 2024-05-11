export class RegisterFeedingPlan {

  visit(page: string) {
    cy.visit(page);
    cy.wait(1000);
  }

  private getInputSemanas() {
    return cy.get('#numero_semanas');
  }

  private getInputLunes() {
    return cy.get(`#calorias_lunes`);
  }

  private getInputMartes() {
    return cy.get(`#calorias_martes`);
  }

  private getInputMiercoles() {
    return cy.get(`#calorias_miercoles`);
  }

  private getInputJueves() {
    return cy.get(`#calorias_jueves`);
  }

  private getInputViernes() {
    return cy.get('#calorias_viernes');
  }

  private getInputSabado() {
    return cy.get('#calorias_sabado');
  }

  private getInputDomingo() {
    return cy.get('#calorias_domingo');
  }

  private getButtonRegister() {
    return cy.get(`button[id='btn-register']`);
  }

  private getButtonCancel() {
    return cy.get(`button[id='btn-cancel']`);
  }

  private getToastSuccessConfirmation() {
    return cy.get('.toast-title.ng-star-inserted');
  }

  private setInputSemanas(numero: string) {
    this.getInputSemanas().clear().type(numero);
  }

  private setInputLunes(calorias: string) {
    this.getInputLunes().clear().type(calorias);
  }

  private setInputMartes(calorias: string) {
    this.getInputMartes().clear().type(calorias);
  }

  private setInputMiercoles(calorias: string) {
    this.getInputMiercoles().clear().type(calorias);
  }

  private setInputJueves(calorias: string) {
    this.getInputJueves().clear().type(calorias);
  }

  private setInputViernes(calorias: string) {
    this.getInputViernes().clear().type(calorias);
  }

  private setInputSabado(calorias: string) {
    this.getInputSabado().clear().type(calorias);
  }

  private setInputDomingo(calorias: string) {
    this.getInputDomingo().clear().type(calorias);
  }

  private clickInObject(object: any) {
    object.click();
  }

  private shouldHaveARegisterComponents() {
    this.getInputSemanas().should('be.visible');
    this.getInputLunes().should('be.visible');
    this.getInputMartes().should('be.visible');
    this.getInputMiercoles().should('be.visible');
    this.getInputJueves().should('be.visible');
    this.getInputViernes().should('be.visible');
    this.getInputSabado().should('be.visible');
    this.getInputDomingo().should('be.visible');
    this.getButtonRegister().should('be.visible');
    this.getButtonCancel().should('be.visible');
  }

  private fillRegisterPlanInTable(semanas: string, lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, sabado: string, domingo: string) {
    cy.wait(5000);
    this.clickInObject(this.getButtonRegister());
    this.setInputSemanas(semanas);
    this.setInputLunes(lunes);
    this.setInputMartes(martes);
    this.setInputMiercoles(miercoles);
    this.setInputJueves(jueves);
    this.setInputViernes(viernes);
    this.setInputSabado(sabado);
    this.setInputDomingo(domingo);
  }

  private validateToastSuccessConfirmation(content: string) {
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  shouldRegisterServiceSuccess(semanas: string, lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, sabado: string, domingo: string) {
    this.shouldHaveARegisterComponents();
    this.fillRegisterPlanInTable(semanas, lunes, martes, miercoles, jueves, viernes, sabado, domingo);
    this.clickInObject(this.getButtonRegister());
    cy.wait(2000);
    this.validateToastSuccessConfirmation('Se registro plan de alimentacion exitosamente!');
  }



}
