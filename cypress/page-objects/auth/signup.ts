export class Signup {

  visit(page: string) {
    cy.visit(page);
  }

  private getInputUsuario() {
    return cy.get(`#inputUsuario`);
  }

  private getinputContrasena() {
    return cy.get('#inputContrasena');
  }

  private getInputNombres() {
    return cy.get('#inputNombres');
  }

  private getInputPeso() {
    return cy.get('#inputPeso');
  }

  private getInputApellidos() {
    return cy.get('#inputApellidos');
  }

  private getInputEdad() {
    return cy.get('#inputEdad');
  }

  private getinputTipoDoc() {
    return cy.get(`select[id='inputTipoDoc']`);
  }

  private getInputAltura() {
    return cy.get('#inputAltura');
  }

  private getInputNumDoc() {
    return cy.get('#inputNumDoc');
  }

  private getInputPaisNac() {
    return cy.get(`select[id='inputPaisNac']`);
  }

  private getInputCiudadNac() {
    return cy.get(`select[id='inputCiudadNac']`);
  }

  private getInputGenero() {
    return cy.get(`select[id='inputGenero']`);
  }

  private getInputPaisRes() {
    return cy.get(`select[id='inputPaisRes']`);
  }

  private getInputCiudadRes() {
    return cy.get(`select[id='inputCiudadRes']`);
  }

  private getCheckboxCiclismo() {
    return cy.get(`label[for='btn-ciclismo']`);
  }

  private getCheckboxAtletismo() {
    return cy.get(`label[for='btn-atletismo']`);
  }

  private getCheckboxOtrosDeportes() {
    return cy.get(`label[for='btn-otros']`);
  }

  private getInputAntiguedad() {
    return cy.get('#inputAntiguedad');
  }

  private getInputTipoPlan() {
    return cy.get(`select[id='inputTipoPlan']`);
  }

  private getInputTipoUsuario() {
    return cy.get(`select[id='inputTipoUsuario']`);
  }

  private getButtonRegister() {
    return cy.get(`button[type='submit']`);
  }

  private getButtonCancel() {
    return cy.get(`button[type='button']`);
  }

  private getToastSuccessConfirmation() {
    return cy.get('.toast-title.ng-star-inserted');
  }

  private getValidationErrorDiv() {
    return cy.get('div.text-danger small');
  }

  private setInputUsuario(usuario: string) {
    this.getInputUsuario().clear().type(usuario);
  }

  private setInputContrasena(contrasena: string) {
    this.getinputContrasena().clear().type(contrasena);
  }

  private setInputNombres(nombres: string) {
    this.getInputNombres().clear().type(nombres);
  }

  private setInputPeso(peso: string) {
    this.getInputPeso().clear().type(peso);
  }

  private setInputApellidos(apellidos: string) {
    this.getInputApellidos().clear().type(apellidos);
  }

  private setInputEdad(edad: string) {
    this.getInputEdad().clear().type(edad);
  }

  private setInputAltura(altura: string) {
    this.getInputAltura().clear().type(altura);
  }

  private setInputNumDoc(num_doc: string) {
    this.getInputNumDoc().clear().type(num_doc);
  }

  private setInputDeporte() {
    this.clickInObject(this.getCheckboxCiclismo());
  }

  private setInputAntiguedad(antiguedad: string) {
    this.getInputAntiguedad().clear().type(antiguedad);
  }

  private clickInObject(object: any) {
    object.click({force: true});
  }

  private countAndValidateElementsInObject(object: any, count: number) {
    object.should('have.length', count);
  }

  private validateObjectIsDisbled(object: any) {
    object.should('be.disabled');
  }

  private shouldHaveUserRegisterForm() {
    this.getInputUsuario().should('be.visible');
    this.getinputContrasena().should('be.visible');
    this.getInputNombres().should('be.visible');
    this.getInputPeso().should('be.visible');
    this.getInputApellidos().should('be.visible');
    this.getInputEdad().should('be.visible');
    this.getinputTipoDoc().should('be.visible');
    this.getInputAltura().should('be.visible');
    this.getInputNumDoc().should('be.visible');
    this.getInputPaisNac().should('be.visible');
    this.getInputCiudadNac().should('be.visible');
    this.getInputGenero().scrollIntoView();
    this.getInputGenero().should('be.visible');
    this.getInputPaisRes().should('be.visible');
    this.getInputCiudadRes().should('be.visible');
    this.getCheckboxCiclismo().should('be.visible');
    this.getCheckboxAtletismo().should('be.visible');
    this.getCheckboxOtrosDeportes().should('be.visible');
    this.getInputAntiguedad().should('be.visible');
    this.getInputTipoPlan().should('be.visible');
    this.getInputTipoUsuario().should('be.visible');
    // this.getButtonRegister().should('be.visible');
    // this.getButtonCancel().should('be.visible');
  }

  private fillRegisterServiceForm(usuario: string, contrasena: string, nombres: string, peso: string, apellidos: string, edad: string, altura: string, num_doc: string, antiguedad: string) {
    this.setInputUsuario(usuario);
    this.setInputContrasena(contrasena);
    this.setInputNombres(nombres);
    this.setInputPeso(peso);
    this.setInputApellidos(apellidos);
    this.setInputEdad(edad);
    this.setInputAltura(altura),
    this.setInputNumDoc(num_doc);
    this.setInputAntiguedad(antiguedad);
    this.setInputDeporte();
    this.clickInObject(this.getButtonRegister());
  }

  private validateToastSuccessConfirmation(content: string){
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  shouldSigninSuccess(usuario: string, contrasena: string, nombres: string, peso: string, apellidos: string, edad: string, altura: string, num_doc: string, antiguedad: string) {
    this.shouldHaveUserRegisterForm();
    this.fillRegisterServiceForm(usuario, contrasena, nombres, peso, apellidos, edad, altura, num_doc, antiguedad);
    // cy.wait(1000);
    // this.validateToastSuccessConfirmation('Se creo usuario exitosamente!')
  }

  shouldValidateMessagesErrorInForm(count: number) {
    this.shouldHaveUserRegisterForm();
    this.clickInObject(this.getButtonCancel());
    this.clickInObject(this.getInputUsuario());
    this.clickInObject(this.getinputContrasena());
    this.clickInObject(this.getInputNombres());
    this.clickInObject(this.getInputPeso());
    this.clickInObject(this.getInputApellidos());
    this.clickInObject(this.getInputEdad());
    this.clickInObject(this.getInputAltura());
    this.clickInObject(this.getInputNumDoc());
    this.getInputGenero().scrollIntoView();
    this.clickInObject(this.getInputAntiguedad());
    this.clickInObject(this.getInputUsuario());
    this.validateObjectIsDisbled(this.getButtonRegister());
    this.countAndValidateElementsInObject(this.getValidationErrorDiv(), count);
  }
}
