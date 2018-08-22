# EmployeeRecordsClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Errors:
- Check spelling when defining Employee Model. All function and variable names will be translated to json in rest api
- @CrossOrigin(orign="localhost:4200"): fixes the No "Access-Control-Allow-Origin" error
- To integrate server and client. Create proxy.config.json in folder and edit the ng start script in package.json
- ERROR TypeError: Cannot read property 'name' of undefined
    - it takes time for employee to exist. so use the ngIf to check if it exists first
- Use ResponseEntity<?> for non GET methods