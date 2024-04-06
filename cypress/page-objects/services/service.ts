export class Service {

  visit(page: string) {
    cy.visit(page);
  }

  private getDropdownServices() {
    return cy.get(`#menuServices`);
  }

  private getRegisterServiceDropdown() {
    return cy.get('#dropdown-services .dropdown-item').contains('Registrar');
  }

  private getInputName() {
    return cy.get('#name');
  }

  private getInputDescription() {
    return cy.get('#description');
  }

  private getInputCost() {
    return cy.get('#cost');
  }

  private getInputPlace() {
    return cy.get('#place');
  }

  private getInputDate() {
    return cy.get('#date');
  }

  private getInputTime() {
    return cy.get('#time');
  }

  private getInputMinimumNumberParticipants() {
    return cy.get('#minimum_number_participants');
  }

  private getInputMaximumNumberParticipants() {
    return cy.get('#maximum_number_participants');
  }

  private getInputFrequency() {
    return cy.get('#frequency');
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

  private getValidationErrorDiv() {
    return cy.get('div.text-danger small');
  }

  private setInputName(name: string) {
    this.getInputName().clear().type(name);
  }

  private setInputDescription(description: string) {
    this.getInputDescription().clear().type(description);
  }

  private setInputCost(cost: string) {
    this.getInputCost().clear().type(cost);
  }

  private setInputPlace(place: string) {
    this.getInputPlace().clear().type(place);
  }

  private setInputDate(date: string) {
    this.getInputDate().clear().type(date);
  }

  private setInputTime(time: string) {
    this.getInputTime().clear().type(time);
  }

  private setInputMinimumNumberParticipants(participants: string) {
    this.getInputMinimumNumberParticipants().clear().type(participants);
  }

  private setInputMaximumNumberParticipants(participants: string) {
    this.getInputMaximumNumberParticipants().clear().type(participants);
  }

  private setInputFrequency(frequency: string) {
    this.getInputFrequency().clear().type(frequency);
  }

  private clickInObject(object: any) {
    object.click();
  }

  private countAndValidateElementsInObject(object: any, count: number) {
    object.should('have.length', count);
  }

  private validateObjectIsDisbled(object: any) {
    object.should('be.disabled');
  }

  private shouldHaveADropdownServices() {
    this.getDropdownServices().should('be.visible');
    this.clickInObject(this.getDropdownServices());
    this.getRegisterServiceDropdown().should('be.visible');
  }

  private shouldHaveARegisterServiceForm() {
    this.getInputName().should('be.visible');
    this.getInputDescription().should('be.visible');
    this.getInputCost().should('be.visible');
    this.getInputPlace().should('be.visible');
    this.getInputDate().should('be.visible');
    this.getInputTime().should('be.visible');
    this.getInputMinimumNumberParticipants().should('be.visible');
    this.getInputMaximumNumberParticipants().should('be.visible');
    this.getInputFrequency().should('be.visible');
    this.getButtonCancel().should('be.visible');
  }

  private fillRegisterServiceForm(name: string, description: string, cost: string, place: string, date: string, time: string, minParticipants: string, maxParticipants: string, frequency: string) {
    this.setInputName(name);
    this.setInputDescription(description);
    this.setInputCost(cost);
    this.setInputPlace(place);
    this.setInputDate(date),
    this.setInputTime(time);
    this.setInputMinimumNumberParticipants(minParticipants);
    this.setInputMaximumNumberParticipants(maxParticipants);
    this.setInputFrequency(frequency);
    this.clickInObject(this.getButtonRegister());
  }

  private validateToastSuccessConfirmation(content: string){
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  shouldSigninSuccess(name: string, description: string, cost: string, place: string, date: string, time: string, minParticipants: string, maxParticipants: string, frequency: string) {
    this.shouldHaveADropdownServices();
    this.shouldHaveARegisterServiceForm();
    this.fillRegisterServiceForm(name, description, cost, place, date, time, minParticipants, maxParticipants, frequency);
    cy.wait(1000);
    this.validateToastSuccessConfirmation('Se registro servicio exitosamente')
  }

  shouldValidateMessagesErrorInForm(count: number) {
    this.shouldHaveADropdownServices();
    this.shouldHaveARegisterServiceForm();
    this.clickInObject(this.getButtonCancel());
    this.clickInObject(this.getInputName());
    this.clickInObject(this.getInputDescription());
    this.clickInObject(this.getInputCost());
    this.clickInObject(this.getInputPlace());
    this.clickInObject(this.getInputMinimumNumberParticipants());
    this.clickInObject(this.getInputMaximumNumberParticipants());
    this.clickInObject(this.getInputFrequency());
    this.clickInObject(this.getInputName());
    this.validateObjectIsDisbled(this.getButtonRegister());
    this.countAndValidateElementsInObject(this.getValidationErrorDiv(), count);
  }
}
