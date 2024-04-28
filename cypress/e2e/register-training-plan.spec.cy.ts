import { faker } from "@faker-js/faker";
import { Signin } from "../page-objects/auth/signin";
import { RegisterTrainingPlan } from "../page-objects/training/register-training-plan";


describe('Registration training plan e2e test', () => {

  it('Should allow you to register training plan successfully', () => {
    cy.viewport(1920, 1080)
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Asignacion de valores para el plan entrenamiento
    let semanas = faker.number.int({min:1, max:50}).toString();
    let lunes = faker.number.int({min:1, max:20}).toString();
    let martes = faker.number.int({min:1, max:20}).toString();
    let miercoles = faker.number.int({min:1, max:20}).toString();
    let jueves = faker.number.int({min:1, max:20}).toString();
    let viernes = faker.number.int({min:1, max:20}).toString();
    let sabado = faker.number.int({min:1, max:20}).toString();
    let domingo = faker.number.int({min:1, max:20}).toString();

    // Ejecución del registro
    let poRegisterTrainingPlan = new RegisterTrainingPlan();
    poRegisterTrainingPlan.visit('/training/register-training-plan');
    poRegisterTrainingPlan.shouldRegisterServiceSuccess(semanas, lunes, martes, miercoles, jueves, viernes, sabado, domingo);
  })

});
