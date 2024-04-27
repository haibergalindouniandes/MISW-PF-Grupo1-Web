import { format } from "date-fns";
import { Signin } from "../page-objects/auth/signin";
import { RegisterFeedingResults } from "../page-objects/nutrition/register-feeding-results";

describe('Registration feeding results e2e test', () => {

  it('Should allow you to register the feeding results successfully', () => {
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Asignacion de valores de la tabla de resultados
    let calories1 = (Math.floor(Math.random() * (800 - 700 + 1)) + 700).toString();
    let calories2 = (Math.floor(Math.random() * (800 - 700 + 1)) + 700).toString();
    let calories3 = (Math.floor(Math.random() * (800 - 700 + 1)) + 700).toString();
    let mlAgua = (Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000).toString();
    let currentDate = new Date();
    let currentDateFormatted = format(currentDate, 'yyyy-MM-dd');
    // Ejecución del registro de servicio
    let poRegisterFeedingResults = new RegisterFeedingResults();
    poRegisterFeedingResults.visit('/nutrition/register-feeding-results');
    poRegisterFeedingResults.shouldRegisterServiceSuccess(calories1, calories2, calories3, mlAgua, currentDateFormatted);
  })

  it('Should allow you to register the feeding results successfully', () => {
    // Asignacion de credenciales
    let email = 'usuario2024@uniandes.edu.co'
    let password = 'Usuario2*24'
    // Ejecución de Login
    const poSignin = new Signin();
    poSignin.visit('/auth/signin')
    poSignin.shouldSigninSuccess(email, password);
    // Asignacion de valores de la tabla de resultados
    let calories1 = '50';
    let calories2 = '50';
    let calories3 = '50';
    let mlAgua = '50';
    let currentDate = new Date();
    let currentDateFormatted = format(currentDate, 'yyyy-MM-dd');
    // Ejecución de la inserción de valores y la cancelación
    let poRegisterFeedingResults = new RegisterFeedingResults();
    poRegisterFeedingResults.visit('/nutrition/register-feeding-results');
    poRegisterFeedingResults.shouldBringInitialValues(calories1, calories2, calories3, mlAgua, currentDateFormatted);
  })

});
