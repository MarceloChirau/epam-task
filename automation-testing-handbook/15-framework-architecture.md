# Framework Architecture

## Overview

A test automation framework is not only a collection of automated tests.

A well-designed framework provides:

- organization
- maintainability
- scalability
- reusable components
- separation of concerns
- easier debugging
- faster development

A typical automation framework separates:

- test cases
- page interactions
- reusable utilities
- test data
- configuration
- reports
- dependencies

---

# Example Framework Structure

```
automation-framework/

│
├── tests/
│
├── pages/
│
├── helpers/
│
├── utils/
│
├── fixtures/
│
├── config/
│
├── reports/
│
├── constants/
│
├── data/
│
├── package.json
│
├── README.md
│
└── test-runner-config
```

---



# 1. tests/



## Purpose

The `tests` folder contains the actual automated test scenarios.

This is where we describe:

- what should be tested
- user workflows
- expected results
- test assertions

Example:

```
tests/

├── login.test.js
├── checkout.test.js
└── profile.test.js
```

Example:

```javascript
describe("Login functionality", () => {

    it("should login with valid credentials", async () => {

        await loginPage.open();

        await loginPage.login(
            "user@test.com",
            "password"
        );

        expect(await dashboardPage.isVisible())
            .toBe(true);

    });

});
```

---



## What belongs here?

✅ Test scenarios  
✅ Assertions  
✅ Test descriptions  
✅ Test execution logic  

Avoid:

❌ Direct selectors  
❌ Complex browser actions  
❌ Repeated code  

Those belong in other layers.

---



# 2. pages/



## Purpose

The `pages` folder contains Page Object Model classes.

The Page Object Model (POM) separates:

- test logic
- page interaction logic

Instead of writing:

```javascript
await browser.click("#login-button");
await browser.setValue("#email", "test@test.com");
```

inside every page, we create:

```
pages/

├── LoginPage.js
├── DashboardPage.js
└── CheckoutPage.js
```

Example:

```javascript
class LoginPage {

    emailInput = "#email";

    passwordInput = "#password";

    loginButton = "#login";


    async login(email, password){

        await $(this.emailInput)
            .setValue(email);

        await $(this.passwordInput)
            .setValue(password);

        await $(this.loginButton)
            .click();
    }

}

module.exports = new LoginPage();
```

---



## Benefits

- reusable code
- easier maintenance
- cleaner tests
- changes only happen in one place

Example:

If the login button changes:

Before:

```
50 tests need updating
```

With Page Objects:

```
1 Page Object needs updating
```

---



# 3. helpers/



## Purpose

The `helpers` folder contains reusable actions related to testing.

Helpers usually represent business-level actions.

Examples:

```
helpers/

├── loginHelper.js
├── apiHelper.js
└── databaseHelper.js
```

Example:

```javascript
async function loginAsUser(){

    await loginPage.open();

    await loginPage.login(
        credentials.email,
        credentials.password
    );

}

module.exports = {
    loginAsUser
};
```

---



## Difference between pages and helpers



### pages/

Responsible for:

```
How to interact with the page
```

Example:

```
click login button
fill username field
select dropdown
```

---



### helpers/

Responsible for:

```
Reusable workflows
```

Example:

```
Login as administrator
Create new customer
Prepare test environment
```

---



# 4. utils/



## Purpose

The `utils` folder contains generic reusable functions.

These functions are not related to a specific page.

Example:

```
utils/

├── dateUtils.js
├── fileUtils.js
├── logger.js
└── randomGenerator.js
```

---

Examples:

## Generate random email

```javascript
function generateEmail(){

    return `
    user_${Date.now()}@test.com
    `;

}
```

---



## Wait utility

```javascript
function wait(seconds){

    return new Promise(resolve =>
        setTimeout(resolve, seconds * 1000)
    );

}
```

---



# 5. fixtures/



## Purpose

Fixtures prepare the environment before tests run.

They handle:

- setup
- teardown
- browser creation
- authentication
- test preparation

Example:

```
fixtures/

├── browser.fixture.js
├── user.fixture.js
└── database.fixture.js
```

---

Example:

```javascript
beforeEach(async()=>{

    await browser.start();

});
```

---

Common fixture tasks:

Before test:

```
Create user
Open browser
Login
Prepare database
```

After test:

```
Close browser
Delete data
Clear cookies
```

---



# 6. config/



## Purpose

The config folder contains framework configuration.

Example:

```
config/

├── browser.config.js
├── environment.config.js
└── test.config.js
```

---

Contains:

- browser settings
- environments
- URLs
- timeouts
- credentials configuration

Example:

```javascript
module.exports = {

    baseUrl:
    "https://example.com",

    timeout:
    10000,

    browser:
    "chrome"

};
```

---



# 7. reports/



## Purpose

Stores test execution results.

Example:

```
reports/

├── screenshots/
├── videos/
├── html-report/
└── junit-results/
```

---

Reports contain:

- passed tests
- failed tests
- execution time
- screenshots
- error messages

---

Example:

Failed test:

```
Login Test

Status:
FAILED

Reason:
Element not found

Screenshot:
login-error.png
```

---



# 8. constants/



## Purpose

Stores fixed values used throughout the framework.

Example:

```
constants/

├── routes.js
├── messages.js
└── roles.js
```

---

Example:

```javascript
const USER_ROLES = {

    ADMIN: "admin",

    CUSTOMER: "customer"

};

module.exports = USER_ROLES;
```

---

Why?

Instead of:

```javascript
if(role === "admin")
```

Use:

```javascript
if(role === USER_ROLES.ADMIN)
```

Benefits:

- avoids duplication
- easier changes
- fewer mistakes

---



# 9. data/



## Purpose

Stores external test data.

Separates:

```
test logic
```

from:

```
test values
```

Example:

```
data/

├── users.json
├── products.json
└── environments.json
```

---

Example:

users.json

```json
{
    "validUser": {

        "email":
        "test@test.com",

        "password":
        "password123"

    }
}
```

---

Benefits:

- easier test maintenance
- data can change without changing tests
- supports data-driven testing

---



# Dependencies

A framework usually depends on several tools.

Example JavaScript automation stack:

```
Node.js

      |

      ▼

npm

      |

      ▼

package.json

      |

      ▼

Test Framework

(Jest / Mocha)

      |

      ▼

Automation Tool

(Playwright / Selenium / WebdriverIO)

      |

      ▼

Browser

Chrome / Firefox
```

---



# package.json

Defines:

- project dependencies
- scripts
- framework information

Example:

```json
{

"dependencies": {

"playwright":
"latest",

"dotenv":
"latest"

},

"scripts": {

"test":
"playwright test"

}

}
```

---



# Dependency Flow

```
package.json

      |

      ▼

npm install

      |

      ▼

node_modules/

      |

      ▼

Automation Framework

      |

      ▼

Browser Driver

      |

      ▼

Browser
```

---



# Framework Data Flow

The typical data flow looks like:

```
Test Data

(data/)

    |

    ▼

Test Case

(tests/)

    |

    ▼

Helper Functions

(helpers/)

    |

    ▼

Page Objects

(pages/)

    |

    ▼

Browser Automation

(Playwright/Selenium)

    |

    ▼

Application
```

---



# Example Data Flow

User login test:

```
users.json

      |

      ▼

login.test.js

      |

      ▼

loginHelper.js

      |

      ▼

LoginPage.js

      |

      ▼

Browser

      |

      ▼

Website Login Page
```

---



# Execution Flow

The execution process:

```
Developer runs command

        |

        ▼

npm test

        |

        ▼

Test Runner starts

        |

        ▼

Fixtures execute

        |

        ▼

Browser launches

        |

        ▼

Test starts

        |

        ▼

Page Objects interact
with application

        |

        ▼

Assertions verify results

        |

        ▼

Report generated

        |

        ▼

Browser closes
```

---



# Complete Framework Architecture

```
                 TEST RUNNER
                     |
                     |
                     ▼

                 tests/
              Test scenarios

                     |
                     ▼

                helpers/
            Business workflows

                     |
                     ▼

                 pages/
          Page Object Model layer

                     |
                     ▼

              Automation Tool

          Playwright / Selenium

                     |
                     ▼

                 Browser

                     |
                     ▼

              Application


Supporting layers:

config/
Environment settings

data/
Test information

fixtures/
Setup and cleanup

utils/
Reusable functions

constants/
Fixed values

reports/
Execution results
```

---



# Why This Architecture Is Important

A good framework should be:

## Maintainable

Changes happen in one place.

Example:

```
Button selector changes

↓

Update Page Object

↓

All tests continue working
```

---



## Scalable

New tests can be added without creating duplicated code.

---



## Readable

Anyone can understand:

```
what is tested
where actions happen
where data comes from
```

---



## Reliable

Clear separation reduces:

- flaky tests
- duplicated logic
- debugging time

---



# Interview Explanation

If asked:

**"Explain your automation framework architecture."**

Answer:

> "My automation framework follows a layered architecture based on the Page Object Model. Tests contain only test scenarios and assertions. Page objects handle UI interactions. Helpers contain reusable business workflows. Utilities provide generic functions. Fixtures manage setup and cleanup. Configuration stores environment settings, while data and constants keep test information separated from logic. The execution starts from the test runner, loads fixtures, executes tests through page objects, interacts with the browser automation layer, and finally generates reports."

