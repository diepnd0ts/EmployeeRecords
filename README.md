# EmployeeRecords

# EmployeeRecordsClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2. This client side part of the application sends http requests to the EmployeeRecords-Server side using REST API to retrieve employee information. This application has three routes: Login (prompts user for login), Employees (views a list of all employees with an option to add/search/delete employees), and Employee-Info (a view of an individual employee info with an option to update and delete the employee).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# EmployeeRecords-Server
This project was generated in Java using the Spring Framework. It contains a REST API in which the client side can call from. THe REST API makes CRUD queries to my localhost mysql database and returns the data for the client side.

## Setup
- Import this project onto Eclipse EE as a Maven Project
- Make to update the project through Maven to get all the dependencies specified in pom.xml
- Run the application locally


Notes:
- Check spelling when defining Employee Model. All function and variable names will be translated to json in rest api
- @CrossOrigin(orign="localhost:4200"): fixes the No "Access-Control-Allow-Origin" error
- To integrate server and client. Create proxy.config.json in folder and edit the ng start script in package.json
- ERROR TypeError: Cannot read property 'name' of undefined
    - it takes time for employee to exist. so use the ngIf to check if it exists first
- Use ResponseEntity<?> for non GET methods
