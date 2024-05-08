import { Service } from "../page-objects/services/service";
import { faker } from "@faker-js/faker";
import { addDays, format } from 'date-fns';
import { Signin } from "../page-objects/auth/signin";
import { RegisterTrainingPlan } from "../page-objects/training/register-training-plan";

export const signinUser = (email: string, password: string) => {
  // Ejecución de Login
  const poSignin = new Signin();
  poSignin.visit('/auth/signin')
  poSignin.shouldSigninSuccess(email, password);
};

export const registerService = () => {
  // Asignacion de valores del formulario de Servicio
  let randomValueCost = Math.random() * (100000 - 10000) + 10000;
  let randomValueMaximumOfPaticipants = Math.random() * (100 - 1) + 1;
  let frequency = ['Diario', 'Semanal', 'Mensual', 'Trimestral', 'Semestral', 'Anual'];
  let randomFrecuencyIndex = Math.floor(Math.random() * frequency.length);
  let currentDate = new Date();
  let futureDate = addDays(currentDate, 2);
  let servicePlace = faker.address.streetAddress();
  let serviceName = `Carrera ${faker.name.fullName()}`;
  let serviceDescription = `Carrera benefica a favor de los niños de cancer, se iniciara en ${servicePlace} atravesando diversas calles ...`;
  let serviceCost = `${randomValueCost.toFixed(2)} COP`;
  let serviceDate = format(futureDate, 'yyyy-MM-dd');
  let serviceTimeStart = '06:00:00';
  let serviceTimeEnd = '09:00:00';
  let serviceMinParticipants = 1;
  let serviceMaxParticipants = randomValueMaximumOfPaticipants.toFixed(0);
  let serviceFrecuency = frequency[randomFrecuencyIndex];
  // Ejecución del registro de servicio
  let poRegisterService = new Service();
  poRegisterService.visit('/services/register');
  poRegisterService.shouldRegisterServiceSuccess(serviceName, serviceDescription, serviceCost, servicePlace, serviceDate, serviceTimeStart, serviceTimeEnd, serviceMinParticipants.toString(), serviceMaxParticipants.toString(), serviceFrecuency);
};

export const registerTrainingPlan = () => {
  // Asignacion de valores para el plan entrenamiento
  let semanas = faker.number.int({ min: 1, max: 50 }).toString();
  let lunes = faker.number.int({ min: 1, max: 20 }).toString();
  let martes = faker.number.int({ min: 1, max: 20 }).toString();
  let miercoles = faker.number.int({ min: 1, max: 20 }).toString();
  let jueves = faker.number.int({ min: 1, max: 20 }).toString();
  let viernes = faker.number.int({ min: 1, max: 20 }).toString();
  let sabado = faker.number.int({ min: 1, max: 20 }).toString();
  let domingo = faker.number.int({ min: 1, max: 20 }).toString();
  // Ejecución del registro
  let poRegisterTrainingPlan = new RegisterTrainingPlan();
  poRegisterTrainingPlan.visit('/training/register-training-plan');
  poRegisterTrainingPlan.shouldRegisterServiceSuccess(semanas, lunes, martes, miercoles, jueves, viernes, sabado, domingo);
};
