## Introduction
This repository represents api- and ui-tests on Cypress and JavaScript.

## Tech stack
- Cypress (the core testing framework)
- Allure (for reporting)
- Faker (for test data generation).

### How to run the tests locally:
1. Download and install [Node.js](https://nodejs.org/en/download)
2. Clone this project, execute the following command from project's root folder to install Node packages:
```sh
npm install
```
3. Install Allure reporting library:
```sh
npm install --save-dev allure-cypress
```
4. Execute the following command to run tests:
```sh
npm run cy:run
```
5. To generate test report, execute:
```sh
npm run report:generate
```
6. To open the generated report in a browser:
```sh
npm run report:open
```