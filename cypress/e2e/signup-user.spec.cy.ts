import { Signup } from "../page-objects/auth/signup";
import { Signin } from "../page-objects/auth/signin";
import { faker } from "@faker-js/faker";
import { addDays, format } from 'date-fns';
import { min } from "cypress/types/lodash";

describe('Signup user e2e test', () => {
  it('Should validate the form fields so that they are not left empty', () => {
    // Asignacion de credenciales
    let email = 'cliente0001@gmail.com'
    let password = 'cliente0001'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Ejecución de la prueba de validación de errores del formulario del registro de servicio
    let validationErrors = 9;
    let poRegisterService = new Signup();
    poRegisterService.visit('/auth/signup');
    poRegisterService.shouldValidateMessagesErrorInForm(validationErrors);
  })

  it('Should allow you to register a service successfully', () => {
    // Asignacion de credenciales
    let email = 'cliente0001@gmail.com'
    let password = 'cliente0001'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Asignacion de valores del formulario de Servicio
    let randomUsuario = faker.internet.email();
    let randomContrasena = faker.string.fromCharacters('@Aa8', {min: 8, max:64})
    console.log(randomContrasena)
    let randomNombres = faker.string.alpha({length: 6}) + ' ' + faker.string.alpha({length: 10});
    let randomPeso = faker.number.float({min:40, max:500}).toString();
    let randomApellidos = faker.string.alpha({length: 8}) + ' ' + faker.string.alpha({length: 12});
    let randomEdad = faker.number.int({min:18, max:90}).toString();
    let randomAltura = faker.number.float({min:130, max:230}).toString();
    let randomNum_doc = faker.number.int({min:11111111, max:99999999}).toString();
    let randomAntiguedad = faker.number.int({min:1, max:900}).toString();
    let poSignup = new Signup();
    poSignup.visit('/auth/signup');
    poSignup.shouldSigninSuccess(randomUsuario, randomContrasena, randomNombres, randomPeso, randomApellidos, randomEdad, randomAltura, randomNum_doc, randomAntiguedad)
  })
});
