# Integrantes de Grupo 1:

|   Nombre                         |   Correo                      | Codigo    | 
|----------------------------------|-------------------------------|-----------|
| Jhon Fredy Guzmán Caicedo        | jf.guzmanc1@uniandes.edu.co   | 202216872 |
| Haiber Humberto Galindo Sanchez  | h.galindos@uniandes.edu.co    | 202216850 |
| Jorge M. Carrillo                | jm.carrillo@uniandes.edu.co   | 200426097 |
| Shiomar Alberto Salazar Castillo | s.salazarc@uniandes.edu.co    | 202213359 |

### Flujo de trabajo
| Nombre rama | Propósito |
| - | - |
| main | Tener el código productivo en versiones siempre estables |
| feature/XXX| XXX: equivale al número de tarea que se está desarrollando o HU, en estas ramas cada miembro del equipo, desarrollara las funcionalidades necesarias para el cumplimiento del caso de uso y los criterios de aceptación, antes de integrar en main|
| fix/master-xxx| xxx: equivale al número de versión generada, si luego de generar una versión en producción, se encuentra un bug o algo a corregir que no se identifico previamente, se crea esta rama a partir de main, se corrige el defecto y luego se hace merge nuevamente a la rama master para asegurar que todo el código se encuentre actualizado|

En el siguiente diagrama se puede observar este Flujo de Trabajo Web:

![FlujoTrabajo_Movil](https://github.com/shiomar-salazar/MISW-PF-Grupo1-Movil/assets/111320185/f6505f8f-2835-4306-be84-0fe2806e23e1)

### Flujo de Integracion y Despliegue Continuo:
Para este repositorio se tiene implementado un flujo de CI/CD basado en los servicios suministrados por Google Cloud Platform, como lo son Cloud Build, Cloud Artifact Registry, Cloud Run y Cloud Storage. </br>

A continuación se describen los diferentes pasos que hacen parte de este flujo:

* La integracion Continua inicia cuando se crea una nueva version en main.
* Se obtienen las fuentes que se encuentran en este repositorio en la rama main.
* Se realiza la instalacion de las dependencias necesarias para la ejecucion de las pruebas. 
* Se ejecutan las pruebas unitarias y de cobertura.
* Se ejecutan las pruebas E2E.
* Se guardan en Cloud Storage sportapp-angular-tests-report el resultado de las pruebas realizadas.
* Se efectua la construcción de la imagen de la aplicación.
* Se publica la imagen en Artifact Registry gcr.io/proyecto2-grupo1/sport-app-angular.
* El despliegue continuo inicia una vez ejecutado el paso anterior.
* Se obtiene la imagen de Artifact Registry
* Se realiza el despliegue en Cloud Run sport-app-angular

En el siguiente Diagrama se puede observar el flujo descrito anteriormente:
 ![Flujo CI/CD Web](https://github.com/shiomar-salazar/MISW-PF-Grupo1-Web/assets/110913673/23d3c99d-83a4-46cd-a2ca-78e93f881417)

# SportApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
