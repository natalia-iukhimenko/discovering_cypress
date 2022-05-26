### Tech stack & design patterns
#### To solve the tasks the following frameworks and libraries were chosen:
- Cypress (the core testing framework):
    - has friendly interface
    - makes corresponding screenshots for each step
    - no need to add explicit or implicit wait commands in test scripts
    - supports automatic scrolling operation
    - provides detailed documentation
- Allure (for reporting):
    - is a flexible and lightweight tool
    - ensures concise representation of testing results
    - an integration with bug-tracking systems can be configured
- Faker (for test data generation):
    - provides a possibility to easily generate test data for different domains

#### Design patterns:
- Page Object
- Chain of Invocations

### How to execute the tests:
1. Clone this repository:
```sh
git clone https://github.com/natalia-iukhimenko/quan-test-challenge.git
```
2. Install Node packages:
```sh
npm install
```
3. Install Allure reporting library
```sh
npm install -g allure-commandline --save-dev
```
4. Navigate to 'quan-test-challenge' directory and execute the following command to run tests:
```sh
npm run cy:run
```
5. To generate test report, execute:
```sh
npm run report:generate
```
6. To open the generated report:
```sh
npm run report:open
```
![report](https://user-images.githubusercontent.com/55945353/170489003-1ba37b40-b331-47b2-b22c-dc9aeb73baae.jpg)
