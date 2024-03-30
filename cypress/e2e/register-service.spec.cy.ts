import { Service } from "../page-objects/auth/service";
import { Signin } from "../page-objects/auth/signin";
import { faker } from "@faker-js/faker";
import { addDays, format } from 'date-fns';

describe('e2e test of registration service', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'administrador@sportapp.com'
    let password = 'SportApp1234*'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Ejecución de la prueba de validación de errores del formulario del registro de servicio
    let validationErrors = 7;
    let poRegisterService = new Service();
    poRegisterService.visit('/services/register');
    poRegisterService.shouldValidateMessagesErrorInForm(validationErrors);
  })

  it('Should allow you to register a service successfully', () => {
    // Asignacion de credenciales
    let email = 'administrador@sportapp.com'
    let password = 'SportApp1234*'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Asignacion de valores del formulario de Servicio
    let randomValueCost = Math.random() * (100000 - 10000) + 10000;
    let randomValueMaximumOfPaticipants = Math.random() * (100 - 1) + 1;
    let frequency = ['Diario', 'Semanal', 'Mensual', 'Trimestral','Semestral', 'Anual'];
    let randomFrecuencyIndex = Math.floor(Math.random() * frequency.length);
    let currentDate = new Date();
    let futureDate = addDays(currentDate, 2);
    let servicePlace = faker.address.streetAddress();
    let serviceName = `Carrera ${faker.name.fullName()}`;
    let serviceDescription = `Carrera benefica a favor de los niños de cancer, se iniciara en ${servicePlace} atravesando diversas calles ...`;
    let serviceCost = `${randomValueCost.toFixed(2)} COP`;
    let serviceDate = format(futureDate, 'yyyy-MM-dd');
    let serviceTime = '08:00';
    let serviceMinParticipants = 1;
    let serviceMaxParticipants = randomValueMaximumOfPaticipants.toFixed(0);
    let serviceFrecuency = frequency[randomFrecuencyIndex];
    // Ejecución del registro de servicio
    let poRegisterService = new Service();
    poRegisterService.visit('/services/register');
    poRegisterService.shouldSigninSuccess(serviceName, serviceDescription, serviceCost, servicePlace, serviceDate, serviceTime, serviceMinParticipants.toString(), serviceMaxParticipants.toString(), serviceFrecuency)
  })
});
