# Automation Testing Glossary

A quick reference for common terms used in Software Testing, Automation Frameworks, BDD, TDD, CI/CD, and JavaScript automation.

---

# Assertion

## Definition

An **assertion** is a validation statement used to verify that the actual result matches the expected result.

If the assertion passes:

```
Test = Passed
```

If the assertion fails:

```
Test = Failed
```

---

## Example

```javascript
expect(title).toBe("Dashboard");
```

The test verifies:

```
Actual:
Dashboard

Expected:
Dashboard
```

---

## Common Assertion Libraries

- Jest Expect
- Chai
- WebdriverIO Expect
- Node.js Assert

Example:

```javascript
expect(element).toBeDisplayed();
```

---

# BDD (Behavior Driven Development)

## Definition

BDD is a software development approach where application behaviour is described using natural language scenarios.

The goal is better collaboration between:

- Developers
- Testers
- Business Analysts

BDD uses the **Gherkin** language.

---

## Example

```gherkin
Feature: Login

Scenario: Successful login

Given the user is on the login page
When the user enters valid credentials
Then the dashboard should be displayed
```

---

## BDD Flow

```
Feature File

        ↓

Step Definitions

        ↓

Page Objects

        ↓

Automation Code
```

---

## Common BDD Keywords

| Keyword | Purpose |
|---|---|
| Given | Initial condition |
| When | Action |
| Then | Expected result |
| And | Additional step |
| But | Negative condition |

---

# TDD (Test Driven Development)

## Definition

TDD is a development approach where tests are written before the actual implementation.

The cycle is:

```
Red

↓

Green

↓

Refactor
```

---

## TDD Process

### 1. Write failing test

```javascript
test("should calculate total", () => {

});
```

Test fails.

---

### 2. Write code

Implement functionality.

---

### 3. Refactor

Improve code quality while keeping tests passing.

---

## BDD vs TDD

| TDD | BDD |
|-|-|
| Developer focused | Business focused |
| Tests written first | Behaviour scenarios written first |
| Unit testing mostly | Acceptance testing mostly |
| Uses code syntax | Uses natural language |

---

# Locator

## Definition

A locator is a way to identify an element on a webpage.

Automation tools use locators to interact with elements.

---

## Examples

CSS:

```css
#username
```

XPath:

```xpath
//input[@id='username']
```

WebdriverIO:

```javascript
$("#username")
```

---

# DOM (Document Object Model)

## Definition

The DOM is the browser's representation of an HTML page as a tree structure.

Automation tools interact with the DOM to find and manipulate elements.

---

## Example HTML

```html
<button id="login">
Login
</button>
```

DOM representation:

```
HTML

 └── Body

      └── Button

            └── id="login"
```

---

# Selector

## Definition

A selector is an expression used to locate elements in the DOM.

---

## CSS Selector Examples

By ID:

```css
#email
```

By Class:

```css
.login-button
```

By Attribute:

```css
input[name='password']
```

---

## XPath Examples

```xpath
//button[text()='Login']
```

```xpath
//input[contains(@id,'user')]
```

---

# Mock

## Definition

A mock is a fake object that replaces a real dependency and allows control over its behaviour.

Usually used in unit testing.

---

## Example

Real API:

```
Application

      ↓

Payment API
```

During testing:

```
Application

      ↓

Mock Payment API
```

---

## Example

```javascript
paymentService.pay = jest.fn();
```

The real payment service is replaced.

---

# Stub

## Definition

A stub is a simplified replacement that returns predefined data.

---

## Example

Instead of calling:

```
Database
```

return:

```javascript
getUser()
{
    return {
        name:"John"
    }
}
```

---

## Mock vs Stub

| Mock | Stub |
|-|-|
| Verifies behaviour | Provides data |
| Checks calls | Returns values |
| More complex | Simpler |

---

# Spy

## Definition

A spy observes calls to a function without replacing its implementation.

It records:

- How many times it was called
- Arguments passed
- Returned values

---

## Example

```javascript
jest.spyOn(console, "log");
```

Now we can verify:

```javascript
expect(console.log)
.toHaveBeenCalled();
```

---

# Fixture

## Definition

A fixture prepares the environment or data required before a test runs.

Examples:

- Creating users
- Creating test data
- Preparing database state
- Authentication setup

---

## Example

```
Test

↓

User Fixture

↓

Create User

↓

Execute Test
```

---

## Example

```javascript
const user = createUserFixture();
```

---

## Note

WebdriverIO does not have built-in fixtures like Playwright.

Fixtures are usually a project structure convention.

---

# Promise

## Definition

A Promise represents a value that will be available now, later, or never.

It handles asynchronous operations.

---

## States

```
Pending

↓

Resolved

or

Rejected
```

---

## Example

```javascript
const result =
fetchData();
```

The result is not immediately available.

---

# Async

## Definition

Async means a function performs an operation that does not complete immediately.

Common examples:

- Browser actions
- API requests
- Database calls

---

## Example

```javascript
async function login(){

}
```

An async function always returns a Promise.

---

# Await

## Definition

`await` pauses execution until a Promise is completed.

---

## Example

```javascript
await LoginPage.open();
```

Without await:

```
Start login

Continue immediately

Login not finished
```

With await:

```
Start login

Wait

Continue
```

---

# Hook

## Definition

A hook is code that runs automatically before or after tests.

Used for setup and cleanup.

---

## Examples

WebdriverIO:

```javascript
beforeTest()

afterTest()
```

Cucumber:

```javascript
Before()

After()
```

---

## Example

```javascript
Before(async()=>{

    await login();

});
```

---

# Page Object

## Definition

Page Object Model (POM) is a design pattern where each application page is represented as a class.

It separates:

- Test logic
- Page interactions

---

## Example

LoginPage.js

```javascript
class LoginPage {

    async login(user){

    }

}
```

---

## Benefits

- Reusable code
- Easier maintenance
- Cleaner tests
- Less duplication

---

# Regression Testing

## Definition

Regression testing verifies that existing functionality still works after changes.

---

## Example

A developer changes checkout.

Regression tests verify:

- Login
- Search
- Cart
- Payment

still work.

---

# Smoke Test

## Definition

Smoke testing is a small set of critical tests that verify whether the application is stable enough for further testing.

---

## Example

For an e-commerce website:

```
Open website

↓

Login

↓

Search product

↓

Add to cart

↓

Checkout
```

---

## Smoke vs Regression

| Smoke | Regression |
|-|-|
| Small test suite | Large test suite |
| Fast | Slower |
| Checks stability | Checks existing functionality |
| Runs frequently | Runs after changes |

---

# CI/CD

## Definition

CI/CD is a practice where code changes are automatically built, tested, and delivered.

---

## CI

Continuous Integration:

```
Developer pushes code

↓

Build

↓

Run Tests

↓

Report Result
```

---

## CD

Continuous Delivery / Deployment:

```
Successful Build

↓

Deploy Application
```

---

# Pipeline

## Definition

A pipeline is a sequence of automated steps executed by a CI/CD system.

---

## Example Pipeline

```
Code Commit

↓

Install Dependencies

↓

Build

↓

Run Tests

↓

Generate Reports

↓

Deploy
```

---

## Common CI/CD Tools

- Jenkins
- GitHub Actions
- GitLab CI
- Azure DevOps
- TeamCity

---

# Flaky Test

## Definition

A flaky test is a test that sometimes passes and sometimes fails without any code changes.

---

## Example

First run:

```
Login Test

PASS
```

Second run:

```
Login Test

FAIL
```

Same code.

---

## Common Causes

- Hardcoded waits
- Timing issues
- Unstable selectors
- Network problems
- Shared test data
- Environment issues

---

## Solutions

Use:

- Explicit waits
- Stable selectors
- Test isolation
- Retry mechanisms
- Better test data management

---

# Quick Interview Definitions

| Term | Short Explanation |
|-|-|
| Assertion | Verifies expected vs actual result |
| BDD | Behaviour-focused testing using Gherkin |
| TDD | Writing tests before implementation |
| Locator | Identifies an element |
| DOM | Browser representation of HTML |
| Selector | Expression used to find elements |
| Mock | Fake dependency used for testing |
| Stub | Fake dependency returning predefined data |
| Spy | Observes function calls |
| Fixture | Prepares test environment/data |
| Promise | Represents future async result |
| Async/Await | Handles asynchronous execution |
| Hook | Runs setup/cleanup automatically |
| Page Object | Class representing a page |
| Regression | Ensures existing features still work |
| Smoke Test | Quick critical functionality check |
| CI/CD | Automated build, test, deployment process |
| Pipeline | Automated execution workflow |
| Flaky Test | Unstable test with inconsistent results |