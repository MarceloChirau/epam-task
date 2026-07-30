# BDD with WebdriverIO + Cucumber + JavaScript

# Overview

Behavior-Driven Development (BDD) is a testing approach where test scenarios are written in plain English using the **Gherkin** language.

Instead of writing tests directly in JavaScript, we describe the application's behavior using:

- Feature
- Scenario
- Given
- When
- Then

Those steps are then connected to JavaScript code through **Step Definitions**.

The actual browser automation is still performed by **WebdriverIO**, while **Cucumber** acts as the BDD framework.

---

# Architecture

```
Business Requirement

        │

        ▼

Feature File (.feature)

        │

        ▼

Step Definitions

(JavaScript)

        │

        ▼

Page Objects

        │

        ▼

WebdriverIO

        │

        ▼

Browser

        │

        ▼

Application
```

---

# Typical Project Structure

```
automation/

│
├── tests/
│   ├── smoke.spec.js
│   ├── api.spec.js
│   └── regression.spec.js
│
├── features/
│   ├── login.feature
│   ├── checkout.feature
│   └── profile.feature
│
├── step-definitions/
│   ├── login.steps.js
│   ├── checkout.steps.js
│   └── profile.steps.js
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── CheckoutPage.js
│
├── helpers/
│
├── utils/
│
├── fixtures/
│
├── constants/
│
├── data/
│
├── reports/
│
├── config/
│   ├── wdio.mocha.conf.js
│   ├── wdio.cucumber.conf.js
│   └── environments.js
│
├── package.json
│
└── README.md
```

---

# Folder Responsibilities

## tests/

Contains traditional WebdriverIO tests.

Example:

```
smoke.spec.js

api.spec.js
```

Executed by:

- Mocha
- Jasmine

---

## features/

Contains business-readable scenarios.

Example:

```
login.feature

checkout.feature
```

Executed by:

- Cucumber

---

## step-definitions/

Maps each Gherkin sentence to JavaScript.

Example:

```
Given ...

↓

JavaScript

↓

Page Object
```

---

## pages/

Contains the Page Object Model.

Responsible for:

- locators
- browser actions
- reusable page methods

---

## config/

Contains framework configuration.

Example:

```
wdio.mocha.conf.js

wdio.cucumber.conf.js
```

Using separate configuration files allows the same project to support both traditional tests and BDD tests.

---

# How Everything Works

```
Feature File

        │

        ▼

Step Definition

        │

        ▼

Page Object

        │

        ▼

WebdriverIO

        │

        ▼

Browser

        │

        ▼

Application
```

Notice:

- Feature files never call Page Objects directly.
- Page Objects never know Step Definitions exist.
- Step Definitions connect the two.

---

# Example Feature

```
features/login.feature
```

```gherkin
Feature: Login

Scenario: Successful login

Given the user is on the login page
When the user enters valid credentials
And clicks the Login button
Then the dashboard should be displayed
```

---

# Example Step Definition

```
step-definitions/login.steps.js
```

```javascript
const { Given, When, Then } =
require("@wdio/cucumber-framework");

const LoginPage =
require("../pages/LoginPage");

const DashboardPage =
require("../pages/DashboardPage");

Given("the user is on the login page", async () => {

    await LoginPage.open();

});

When("the user enters valid credentials", async () => {

    await LoginPage.login(
        "john@test.com",
        "Password123"
    );

});

When("clicks the Login button", async () => {

    await LoginPage.clickLogin();

});

Then("the dashboard should be displayed", async () => {

    await DashboardPage.verifyLoaded();

});
```

---

# Example Page Object

```
pages/LoginPage.js
```

```javascript
class LoginPage {

    get email(){

        return $("#email");

    }

    get password(){

        return $("#password");

    }

    get loginButton(){

        return $("#login");

    }

    async open(){

        await browser.url("/login");

    }

    async login(email,password){

        await this.email.setValue(email);

        await this.password.setValue(password);

        await this.loginButton.click();

    }

    async clickLogin(){

        await this.loginButton.click();

    }

}

module.exports = new LoginPage();
```

---

# WebdriverIO Configuration

## Traditional Tests

```
config/wdio.mocha.conf.js
```

```javascript
exports.config = {

    framework: "mocha",

    specs: [

        "./tests/**/*.spec.js"

    ]

};
```

Run:

```bash
npx wdio run config/wdio.mocha.conf.js
```

---

## BDD Tests

```
config/wdio.cucumber.conf.js
```

```javascript
exports.config = {

    framework: "cucumber",

    specs: [

        "./features/**/*.feature"

    ],

    cucumberOpts: {

        require: [

            "./step-definitions/**/*.js"

        ]

    }

};
```


# Proper config/wdio.cucumber.conf.js:

```javascript
// wdio.cucumber.conf.js

exports.config = {

    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Test Specifications
    // ==================
    specs: [
        './features/**/*.feature'
    ],

    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 5,

    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        maxInstances: 2,
        'goog:chromeOptions': {
            args: [
                '--window-size=1920,1080'
            ]
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://www.saucedemo.com',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    //
    // =========
    // Services
    // =========
    services: ['chromedriver'],

    //
    // =========
    // Framework
    // =========
    framework: 'cucumber',

    //
    // ==========
    // Reporters
    // ==========
    reporters: [
        'spec'
    ],

    //
    // =================
    // Cucumber Options
    // =================
    cucumberOpts: {

        // Location of step definitions
        require: [
            './step-definitions/**/*.js'
        ],

        // Optional support files
        requireModule: [],

        // Fail if a step has no implementation
        failAmbiguousDefinitions: true,

        // Dry run without executing steps
        dryRun: false,

        // Display step snippets for undefined steps
        snippets: true,

        // Timeout per step
        timeout: 60000,

        // Ignore skipped steps
        ignoreUndefinedDefinitions: false,

        // Tag execution
        tagExpression: '',

        // Backtrace on failure
        backtrace: false
    },

    //
    // =========
    // Hooks
    // =========
    beforeScenario: async function () {
        await browser.maximizeWindow();
    },

    afterScenario: async function (world, result) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    }
}
```


Run:

```bash
npx wdio run config/wdio.cucumber.conf.js
```

---

# Execution Flow

When running:

```bash
npx wdio run config/wdio.cucumber.conf.js
```

WebdriverIO performs:

```
Read configuration

        │

        ▼

Find .feature files

        │

        ▼

Read Given

        │

        ▼

Find matching Step Definition

        │

        ▼

Execute JavaScript

        │

        ▼

Call Page Object

        │

        ▼

Interact with Browser

        │

        ▼

Verify Assertions

        │

        ▼

Generate Report
```

---

# Installing Cucumber

If you create a new WebdriverIO project using the official wizard:

```bash
npm init wdio@latest
```

and choose:

```
Framework:

Cucumber
```

WebdriverIO automatically installs the required Cucumber packages.

You **do not need to install Cucumber manually**.

---

## Existing Mocha Project

If your project already exists and currently uses Mocha, install the Cucumber adapter:

```bash
npm install --save-dev @wdio/cucumber-framework
```

Depending on your WebdriverIO version, you may also install:

```bash
npm install --save-dev @cucumber/cucumber
```

Most modern WebdriverIO setups include the correct dependency automatically through the adapter, but `@cucumber/cucumber` is the underlying Cucumber library.

---

# Running Tests

Run Mocha tests:

```bash
npx wdio run config/wdio.mocha.conf.js
```

Run BDD tests:

```bash
npx wdio run config/wdio.cucumber.conf.js
```

Run a specific feature:

```bash
npx wdio run config/wdio.cucumber.conf.js --spec ./features/login.feature
```

Run a specific Mocha test:

```bash
npx wdio run config/wdio.mocha.conf.js --spec ./tests/smoke.spec.js
```

---

# Advantages of BDD

- Business-readable scenarios
- Better collaboration with Product Owners and Business Analysts
- Documentation and tests stay synchronized
- Reusable step definitions
- Encourages behaviour-focused testing

---

# Advantages of Traditional Tests

- Less boilerplate
- Simpler to maintain for technical teams
- Faster to write
- Easier debugging
- Better suited for highly technical test suites

---

# Can a Project Support Both?

Yes.

Many enterprise projects support both approaches.

Example:

```
Mocha

↓

Smoke Tests

Regression Tests

API Tests


Cucumber

↓

Business Acceptance Tests

End-to-End User Scenarios
```

Both approaches can reuse the same:

- Page Objects
- Helpers
- Utilities
- Fixtures
- Test Data
- Reports

Only the entry point changes.

---

# Interview Explanation

If asked:

**"Can WebdriverIO support both traditional tests and BDD?"**

Answer:

> "Yes. A project can support both approaches by using separate WebdriverIO configuration files. For example, `wdio.mocha.conf.js` executes traditional `.spec.js` files using the Mocha framework, while `wdio.cucumber.conf.js` executes `.feature` files using the Cucumber framework. Both configurations can share the same Page Objects, helpers, utilities, fixtures, and reporting infrastructure, allowing the framework to support both technical tests and business-readable acceptance tests."