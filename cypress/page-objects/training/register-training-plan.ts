export class RegisterTrainingPlan {

  visit(page: string) {
    cy.visit(page);
    cy.wait(1000);
  }

  private getDropdownEntrenamiento() {
    return cy.get(`#inputEntrenamiento`);
  }

  private getInputSemanas() {
    return cy.get('#numero_semanas');
  }

  private getInputLunes() {
    return cy.get(`#distancia_lunes`);
  }

  private getInputMartes() {
    return cy.get(`#distancia_martes`);
  }

  private getInputMiercoles() {
    return cy.get(`#distancia_miercoles`);
  }

  private getInputJueves() {
    return cy.get(`#distancia_jueves`);
  }

  private getInputViernes() {
    return cy.get('#distancia_viernes');
  }

  private getInputSabado() {
    return cy.get('#distancia_sabado');
  }

  private getInputDomingo() {
    return cy.get('#distancia_domingo');
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

  private setInputLunes(distancia: string) {
    this.getInputLunes().clear().type(distancia);
  }

  private setInputMartes(distancia: string) {
    this.getInputMartes().clear().type(distancia);
  }

  private setInputMiercoles(distancia: string) {
    this.getInputMiercoles().clear().type(distancia);
  }

  private setInputJueves(distancia: string) {
    this.getInputJueves().clear().type(distancia);
  }

  private setInputViernes(distancia: string) {
    this.getInputViernes().clear().type(distancia);
  }

  private setInputSabado(distancia: string) {
    this.getInputSabado().clear().type(distancia);
  }

  private setInputDomingo(distancia: string) {
    this.getInputDomingo().clear().type(distancia);
  }

  private clickInObject(object: any) {
    object.click();
  }

  private shouldHaveARegisterComponents() {
    this.getDropdownEntrenamiento().should('be.visible');
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
    cy.wait(4000);
    this.validateToastSuccessConfirmation('Se registro plan de entrenamiento exitosamente!');
  }



}
