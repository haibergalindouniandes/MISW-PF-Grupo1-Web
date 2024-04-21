export class RegisterFeedingResults {

  visit(page: string) {
    cy.visit(page);
    cy.wait(1000);
  }

  private getDropdownNutrition() {
    return cy.get(`#menuNutrition`);
  }

  private getRegisterNutritionDropdown() {
    return cy.get('#dropdown-nutrition .dropdown-item').contains('Registrar');
  }

  private getInputCalories1() {
    return cy.get(`#calories_1`);
  }

  private getInputCalories2() {
    return cy.get(`#calories_2`);
  }

  private getInputCalories3() {
    return cy.get(`#calories_3`);
  }

  private getInputMlWater() {
    return cy.get(`#ml_water`);
  }

  private getInputDate() {
    return cy.get('#date');
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

  private setInputDate(date: string) {
    this.getInputDate().clear().type(date);
  }

  private setInputCalories1(calories: string) {
    this.getInputCalories1().clear().type(calories);
  }

  private setInputCalories2(calories: string) {
    this.getInputCalories2().clear().type(calories);
  }

  private setInputCalories3(calories: string) {
    this.getInputCalories3().clear().type(calories);
  }

  private setInputMlWater(mlWater: string) {
    this.getInputMlWater().clear().type(mlWater);
  }

  private clickInObject(object: any) {
    object.click();
  }

  private shouldHaveADropdownNutrition() {
    this.getDropdownNutrition().should('be.visible');
    this.clickInObject(this.getDropdownNutrition());
    this.getRegisterNutritionDropdown().should('be.visible');
  }

  private shouldHaveARegisterComponents() {
    this.getInputCalories1().should('be.visible');
    this.getInputCalories2().should('be.visible');
    this.getInputCalories3().should('be.visible');
    this.getInputMlWater().should('be.visible');
    this.getInputDate().should('be.visible');
    this.getButtonRegister().should('be.visible');
    this.getButtonCancel().should('be.visible');
  }

  private fillRegisterResultInTable(calories1: string, calories2: string, calories3: string, mlWater: string, date: string) {
    this.setInputDate(date);
    cy.wait(1000);
    this.clickInObject(this.getButtonRegister());
    this.setInputCalories1(calories1);
    this.setInputCalories2(calories2);
    this.setInputCalories3(calories3);
    this.setInputMlWater(mlWater);
  }

  private validateToastSuccessConfirmation(content: string){
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  private validateThatAllInputsAreDifferent(calories1: string, calories2: string, calories3: string, mlWater: string, date: string) {
    this.getInputCalories1().should('not.have.value', calories1);
    this.getInputCalories2().should('not.have.value', calories2);
    this.getInputCalories3().should('not.have.value', calories3);
    this.getInputMlWater().should('not.have.value', mlWater);
  }

  shouldRegisterServiceSuccess(calories1: string, calories2: string, calories3: string, mlWater: string, date: string) {
    this.shouldHaveADropdownNutrition();
    this.shouldHaveARegisterComponents();
    this.fillRegisterResultInTable(calories1, calories2, calories3, mlWater, date);
    this.clickInObject(this.getButtonRegister());
  }

  shouldBringInitialValues(calories1: string, calories2: string, calories3: string, mlWater: string, date: string) {
    this.shouldHaveADropdownNutrition();
    this.shouldHaveARegisterComponents();
    this.fillRegisterResultInTable(calories1, calories2, calories3, mlWater, date);
    this.clickInObject(this.getButtonCancel());
    this.validateThatAllInputsAreDifferent(calories1, calories2, calories3, mlWater, date);
  }

}
