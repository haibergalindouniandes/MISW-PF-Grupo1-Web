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

  private getListServiceDropdown() {
    return cy.get('#dropdown-services .dropdown-item').contains('Lista de servicios');
  }

  private getScheduleDropdown() {
    return cy.get('#dropdown-services .dropdown-item').contains('Agendar');
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

  private getInputTimeStart() {
    return cy.get('#timeStart');
  }

  private getInputTimeEnd() {
    return cy.get('#timeEnd');
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

  private getTableListServicesContainer() {
    return cy.get('#table-container');
  }

  private getDetailServiceContainer() {
    return cy.get('#detail-container');
  }

  private getTableListServices() {
    return cy.get('#table-list-services');
  }

  private getTableDetailService() {
    return cy.get('#table-detail-service');
  }

  private getValidationErrorDiv() {
    return cy.get('div.text-danger small');
  }

  private getTextareaMessage() {
    return cy.get('#message');
  }

  private getButtonSendNotification() {
    return cy.get(`button[id='btn-send-notification']`);
  }

  private getButtonSchedule() {
    return cy.get(`button[id='btn-scheduler']`);
  }

  private getSelectHours() {
    return cy.get(`select[id='selectHours']`).select(1);
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

  private setInputTimeStart(time: string) {
    this.getInputTimeStart().clear().type(time);
  }

  private setInputTimeEnd(time: string) {
    this.getInputTimeEnd().clear().type(time);
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

  private setValueInputElement(object: any, value: string) {
    object.clear().type(value);
  }

  private countAndValidateElementsInObject(object: any, count: number) {
    object.should('have.length', count);
  }

  private countAndValidateMinRowsInTable(table: any, count: number) {
    table.find('tr').should('have.length.gt', count);
  }

  private validateColumnsNamesInTable(table: any, columns: string[]) {
    table.within(() => {
      columns.forEach(column => {
        cy.contains(column);
      });
    });
  }

  private validateObjectIsDisbled(object: any) {
    object.should('be.disabled');
  }

  private shouldHaveADropdownServices() {
    this.getDropdownServices().should('be.visible');
    this.clickInObject(this.getDropdownServices());
    this.getRegisterServiceDropdown().should('be.visible');
  }

  private shouldHaveADropdownServicesList() {
    this.getDropdownServices().should('be.visible');
    this.clickInObject(this.getDropdownServices());
    this.getListServiceDropdown().should('be.visible');
  }

  private shouldHaveADropdownServicesListToschedule() {
    this.getDropdownServices().should('be.visible');
    this.clickInObject(this.getDropdownServices());
    this.getScheduleDropdown().should('be.visible');
  }

  private shouldHaveARegisterServiceForm() {
    this.getInputName().should('be.visible');
    this.getInputDescription().should('be.visible');
    this.getInputCost().should('be.visible');
    //this.getInputPlace().should('be.visible');
    this.getInputDate().should('be.visible');
    this.getInputTimeStart().should('be.visible');
    this.getInputTimeEnd().should('be.visible');
    this.getInputMinimumNumberParticipants().should('be.visible');
    this.getInputMaximumNumberParticipants().should('be.visible');
    this.getInputFrequency().should('be.visible');
    this.getButtonCancel().should('be.visible');
  }

  private fillRegisterServiceForm(name: string, description: string, cost: string, place: string, date: string, timeStart: string, timeEnd: string, minParticipants: string, maxParticipants: string, frequency: string) {
    this.setInputName(name);
    this.setInputDescription(description);
    this.setInputCost(cost);
    //this.setInputPlace(place);
    this.setInputDate(date),
    this.setInputTimeStart(timeStart);
    this.setInputTimeEnd(timeEnd);
    this.setInputMinimumNumberParticipants(minParticipants);
    this.setInputMaximumNumberParticipants(maxParticipants);
    this.setInputFrequency(frequency);
    this.clickInObject(this.getButtonRegister());
  }

  private validateToastSuccessConfirmation(content: string) {
    this.getToastSuccessConfirmation().should("be.visible");
    this.getToastSuccessConfirmation().contains(content);
  }

  private shouldHaveTableComponents() {
    this.getTableListServicesContainer().should('be.visible');
  }

  private shouldHaveDetailCardComponents() {
    this.getDetailServiceContainer().should('be.visible');
    this.getTableDetailService().should('be.visible');
  }

  private shouldHaveNotificationComponents() {
    this.getTextareaMessage().should('be.visible');
    this.getButtonSendNotification().should('be.visible');
  }

  private fillSendNotificationForm(message: string) {
    this.setValueInputElement(this.getTextareaMessage(), message);
  }

  private clickInRowOfTable(table: any, row: number) {
    table.find('tr').eq(row).click();
  }

  private clickInRowOfSelect(select: any, row: number) {
    select.find('option').select(row);
  }

  shouldRegisterServiceSuccess(name: string, description: string, cost: string, place: string, date: string, timeStart: string, timeEnd: string, minParticipants: string, maxParticipants: string, frequency: string) {
    this.shouldHaveADropdownServices();
    this.shouldHaveARegisterServiceForm();
    this.fillRegisterServiceForm(name, description, cost, place, date, timeStart, timeEnd, minParticipants, maxParticipants, frequency);
    cy.wait(4000);
    this.validateToastSuccessConfirmation('Se registro servicio exitosamente')
  }

  shouldValidateMessagesErrorInForm(count: number) {
    this.shouldHaveADropdownServices();
    this.shouldHaveARegisterServiceForm();
    this.clickInObject(this.getButtonCancel());
    this.clickInObject(this.getInputName());
    this.clickInObject(this.getInputDescription());
    this.clickInObject(this.getInputCost());
    //this.clickInObject(this.getInputPlace());
    this.clickInObject(this.getInputMinimumNumberParticipants());
    this.clickInObject(this.getInputMaximumNumberParticipants());
    this.clickInObject(this.getInputFrequency());
    this.clickInObject(this.getInputName());
    this.validateObjectIsDisbled(this.getButtonRegister());
    this.countAndValidateElementsInObject(this.getValidationErrorDiv(), count);
  }

  shouldBeAlistOfServicesAndDetails(rowsInTable: number, columns: string[]) {
    cy.wait(4000);
    this.shouldHaveADropdownServicesList();
    this.shouldHaveTableComponents();
    this.countAndValidateMinRowsInTable(this.getTableListServices(), rowsInTable);
    this.clickInRowOfTable(this.getTableListServices(), 1);
    this.shouldHaveDetailCardComponents();
    this.countAndValidateMinRowsInTable(this.getTableDetailService(), 2);
    this.validateColumnsNamesInTable(this.getTableDetailService(), columns);
  }

  shouldBeAlistOfScheduledUserServicesAndDetails(rowsInTable: number, columns: string[]) {
    cy.wait(4000);
    this.shouldHaveADropdownServicesList();
    this.shouldHaveTableComponents();
    this.countAndValidateMinRowsInTable(this.getTableListServices(), rowsInTable);
    this.clickInRowOfTable(this.getTableListServices(), 1);
    this.shouldHaveDetailCardComponents();
    this.countAndValidateMinRowsInTable(this.getTableDetailService(), 1);
    this.validateColumnsNamesInTable(this.getTableDetailService(), columns);
  }

  shouldSendMasiveNotification(message: string) {
    this.fillSendNotificationForm(message);
    this.shouldHaveNotificationComponents();
    this.clickInObject(this.getButtonSendNotification());
  }

  shouldBeAlistOfScheduledUserServicesAndDetailsToSchedule(rowsInTable: number, columns: string[]) {
    cy.wait(4000);
    this.shouldHaveADropdownServicesListToschedule();
    this.shouldHaveTableComponents();
    this.countAndValidateMinRowsInTable(this.getTableListServices(), rowsInTable);
    this.clickInRowOfTable(this.getTableListServices(), 1);
    this.shouldHaveDetailCardComponents();
    this.countAndValidateMinRowsInTable(this.getTableDetailService(), 1);
    this.validateColumnsNamesInTable(this.getTableDetailService(), columns);
    cy.wait(4000);
    this.getSelectHours();
    this.clickInObject(this.getButtonSchedule());
    cy.wait(4000);
    this.validateToastSuccessConfirmation('Se agendo servicio exitosamente!');
  }
}
