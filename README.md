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

## Lanzar servidor de forma local

Ejecutar comando `ng serve`

## Construir la aplicacion incluyendo internacionalizacion

Ejecutar comando `ng build --localize`

## Ejecutar pruebas unitarias y cobertura

Ejecutar comando `ng test --watch=false --browsers=ChromeHeadlessNoSandbox --code-coverage=true`

## Ejecutar pruebas E2E

Ejecutar comando `ng e2e`

### Estructura del Proyecto

```
MISW-PF-Grupo1-Web
├─ .angular
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ cloudbuild.yaml
├─ commands
├─ cypress
│  ├─ e2e
│  │  ├─ register-service.spec.cy.ts
│  │  └─ signin-user.spec.cy.ts
│  ├─ fixtures
│  │  └─ example.json
│  ├─ page-objects
│  │  ├─ auth
│  │  │  └─ signin.ts
│  │  └─ services
│  │     └─ service.ts
│  ├─ support
│  │  ├─ commands.ts
│  │  ├─ component-index.html
│  │  ├─ component.ts
│  │  └─ e2e.ts
│  └─ tsconfig.json
├─ cypress.config.ts
├─ Dockerfile
├─ nginx.conf
├─ package-lock.json
├─ package.json
├─ README.md
├─ run-tests.sh
├─ server.ts
├─ src
│  ├─ app
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.server.ts
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ core
│  │  │  ├─ guards
│  │  │  │  ├─ auth.guard.ts
│  │  │  │  └─ provider.guard.ts
│  │  │  ├─ interceptors
│  │  │  │  └─ http-error.interceptor.ts
│  │  │  ├─ models
│  │  │  │  ├─ auth
│  │  │  │  │  ├─ login.ts
│  │  │  │  │  ├─ signin.ts
│  │  │  │  │  └─ signup.ts
│  │  │  │  └─ services
│  │  │  │     ├─ register.ts
│  │  │  │     └─ service.ts
│  │  │  └─ services
│  │  │     ├─ auth
│  │  │     │  ├─ login.service.spec.ts
│  │  │     │  ├─ login.service.ts
│  │  │     │  ├─ signup.service.spec.ts
│  │  │     │  └─ signup.service.ts
│  │  │     └─ services
│  │  │        ├─ register.service.spec.ts
│  │  │        └─ register.service.ts
│  │  ├─ features
│  │  │  ├─ auth
│  │  │  │  ├─ auth.routing.ts
│  │  │  │  ├─ components
│  │  │  │  │  ├─ signin-form
│  │  │  │  │  │  ├─ signin-form.component.html
│  │  │  │  │  │  ├─ signin-form.component.scss
│  │  │  │  │  │  ├─ signin-form.component.spec.ts
│  │  │  │  │  │  └─ signin-form.component.ts
│  │  │  │  │  └─ signup-form
│  │  │  │  │     ├─ signup-form.component.css
│  │  │  │  │     ├─ signup-form.component.html
│  │  │  │  │     ├─ signup-form.component.spec.ts
│  │  │  │  │     └─ signup-form.component.ts
│  │  │  │  └─ pages
│  │  │  │     ├─ signin
│  │  │  │     │  ├─ signin.component.html
│  │  │  │     │  ├─ signin.component.scss
│  │  │  │     │  ├─ signin.component.spec.ts
│  │  │  │     │  └─ signin.component.ts
│  │  │  │     └─ signup
│  │  │  │        ├─ signup.component.css
│  │  │  │        ├─ signup.component.html
│  │  │  │        ├─ signup.component.spec.ts
│  │  │  │        └─ signup.component.ts
│  │  │  ├─ home
│  │  │  │  ├─ components
│  │  │  │  │  └─ card
│  │  │  │  │     ├─ card.component.html
│  │  │  │  │     ├─ card.component.scss
│  │  │  │  │     ├─ card.component.spec.ts
│  │  │  │  │     └─ card.component.ts
│  │  │  │  ├─ home.routing.ts
│  │  │  │  └─ pages
│  │  │  │     └─ init
│  │  │  │        ├─ init.component.html
│  │  │  │        ├─ init.component.scss
│  │  │  │        ├─ init.component.spec.ts
│  │  │  │        └─ init.component.ts
│  │  │  └─ services
│  │  │     ├─ components
│  │  │     │  └─ register-form
│  │  │     │     ├─ register-form.component.html
│  │  │     │     ├─ register-form.component.scss
│  │  │     │     ├─ register-form.component.spec.ts
│  │  │     │     └─ register-form.component.ts
│  │  │     ├─ pages
│  │  │     │  └─ register
│  │  │     │     ├─ register.component.html
│  │  │     │     ├─ register.component.scss
│  │  │     │     ├─ register.component.spec.ts
│  │  │     │     └─ register.component.ts
│  │  │     └─ services.routing.ts
│  │  └─ shared
│  │     └─ components
│  │        ├─ footer
│  │        │  ├─ footer.component.html
│  │        │  ├─ footer.component.scss
│  │        │  ├─ footer.component.spec.ts
│  │        │  └─ footer.component.ts
│  │        ├─ headers
│  │        │  ├─ headers.component.html
│  │        │  ├─ headers.component.scss
│  │        │  ├─ headers.component.spec.ts
│  │        │  └─ headers.component.ts
│  │        └─ not-found
│  │           ├─ not-found.component.html
│  │           ├─ not-found.component.scss
│  │           ├─ not-found.component.spec.ts
│  │           └─ not-found.component.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  └─ images
│  │     ├─ home
│  │     │  ├─ background.jpg
│  │     │  ├─ home_ciclysm.jpg
│  │     │  ├─ logo.jpg
│  │     │  └─ user-avatar.png
│  │     └─ not-found
│  │        ├─ astronaut.svg
│  │        └─ planet.svg
│  ├─ environments
│  │  ├─ environment.development.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ locale
│  │  ├─ messages.es.xlf
│  │  └─ messages.xlf
│  ├─ main.server.ts
│  ├─ main.ts
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
