````markdown
# JavaScript Testing Ecosystem

Understanding the JavaScript testing ecosystem is essential for modern test automation. Each tool has a specific responsibility, and together they form a complete testing stack.

```text
JavaScript
│
▼
Test Runner
(Jest / Mocha)
│
▼
Assertions
(Jest / Chai)
│
▼
Automation Framework
(WebdriverIO / Playwright / Selenium)
│
▼
Browser
(Chrome / Firefox / Edge / Safari)
```

---

# 1. JavaScript

JavaScript is the programming language used to write test scripts.

Automation frameworks, test runners, and assertion libraries all execute JavaScript code.

Example:

```javascript
const sum = (a, b) => a + b;

console.log(sum(2, 3));
```

JavaScript is used for:

- Writing automated tests
- Creating helper functions
- Handling asynchronous operations
- Interacting with web pages

---

# 2. Test Runner

A **test runner** discovers, executes, and reports test results.

Responsibilities:

- Finds test files
- Runs tests
- Groups tests
- Reports passed/failed tests
- Supports hooks (`beforeEach`, `afterEach`, etc.)

Popular test runners:

- Jest
- Mocha
- Vitest

Example (Jest):

```javascript
test("adds two numbers", () => {
    expect(2 + 2).toBe(4);
});
```

Without a test runner, your tests would never execute automatically.

---

# 3. Assertion Library

Assertions verify that your application behaves as expected.

Example:

```javascript
expect(total).toBe(10);
```

If the value is correct:

```
PASS
```

Otherwise:

```
FAIL
Expected: 10
Received: 8
```

Popular assertion libraries:

- Jest Assertions
- Chai
- Node.js Assert

Common assertions:

```javascript
expect(a).toBe(b);

expect(array).toContain("Admin");

expect(user).toEqual(expectedUser);

expect(value).toBeTruthy();

expect(value).toBeFalsy();
```

---

# 4. Automation Framework

Automation frameworks interact with applications.

They can:

- Click buttons
- Type into inputs
- Wait for elements
- Navigate pages
- Take screenshots
- Execute JavaScript
- Verify page content

Popular frameworks:

- Playwright
- WebdriverIO
- Selenium
- Cypress

Example (Playwright):

```javascript
await page.goto("https://example.com");

await page.click("#login");

await page.fill("#username", "admin");
```

The framework controls the browser.

---

# 5. Browser

The browser is where the application actually runs.

Examples:

- Chrome
- Firefox
- Edge
- Safari

Automation frameworks send commands to the browser.

Example flow:

```
Test

↓

Playwright

↓

Chrome

↓

Application
```

---

# How Everything Works Together

```text
Test File
      │
      ▼
Test Runner
(Jest / Mocha)
      │
      ▼
Assertions
(expect())
      │
      ▼
Automation Framework
(Playwright / WebdriverIO)
      │
      ▼
Browser
(Chrome)
      │
      ▼
Website
```

Example:

```javascript
test("User can log in", async () => {

    await page.goto("/login");

    await page.fill("#username", "admin");

    await page.fill("#password", "password");

    await page.click("#login");

    await expect(page.locator("h1"))
        .toHaveText("Dashboard");

});
```

Each layer has a different responsibility:

| Layer | Responsibility |
|---------|----------------|
| JavaScript | Programming language |
| Test Runner | Executes tests |
| Assertion Library | Verifies results |
| Automation Framework | Controls the application |
| Browser | Executes the web application |

---

# Node.js

Node.js is a JavaScript runtime that allows JavaScript to run **outside the browser**.

Without Node.js:

- JavaScript only runs in a browser.

With Node.js:

- JavaScript can run from the command line.
- You can install packages.
- You can execute automation tests.
- You can build backend applications.

Example:

```bash
node app.js
```

Check the installed version:

```bash
node --version
```

---

# npm

**npm (Node Package Manager)** is the default package manager for Node.js.

It is used to:

- Install libraries
- Update dependencies
- Remove packages
- Run project scripts

Install a package:

```bash
npm install playwright
```

Install as a development dependency:

```bash
npm install --save-dev jest
```

Run a script:

```bash
npm test
```

List installed packages:

```bash
npm list
```

---

# package.json

`package.json` is the configuration file for a Node.js project.

It contains:

- Project name
- Version
- Scripts
- Dependencies
- Development dependencies
- Metadata

Example:

```json
{
  "name": "automation-project",
  "version": "1.0.0",

  "scripts": {
    "test": "jest"
  },

  "dependencies": {
    "playwright": "^1.55.0"
  },

  "devDependencies": {
    "jest": "^30.0.0"
  }
}
```

Useful commands:

Create a new project:

```bash
npm init
```

Automatically answer prompts:

```bash
npm init -y
```

Install all project dependencies:

```bash
npm install
```

---

# ES Modules (ESM)

ES Modules are the modern JavaScript module system.

Import:

```javascript
import { login } from "./login.js";
```

Export:

```javascript
export function login() {

}
```

Default export:

```javascript
export default login;
```

Default import:

```javascript
import login from "./login.js";
```

Benefits:

- Standard JavaScript syntax
- Tree shaking support
- Better compatibility with modern tooling
- Recommended for new projects

---

# CommonJS (CJS)

CommonJS is the older module system used by Node.js.

Import:

```javascript
const login = require("./login");
```

Export:

```javascript
module.exports = login;
```

Example:

```javascript
// math.js

function add(a, b) {
    return a + b;
}

module.exports = add;
```

```javascript
// app.js

const add = require("./math");

console.log(add(2, 3));
```

---

# ES Modules vs CommonJS

| Feature | ES Modules | CommonJS |
|----------|------------|----------|
| Import | `import` | `require()` |
| Export | `export` | `module.exports` |
| Standard | Modern JavaScript | Older Node.js system |
| Static analysis | Yes | Limited |
| Recommended | Yes | Legacy projects |

---

# Typical Project Structure

```text
automation-project/
│
├── node_modules/
├── tests/
│   ├── login.test.js
│   └── checkout.test.js
│
├── pages/
│   ├── LoginPage.js
│   └── HomePage.js
│
├── package.json
├── package-lock.json
└── playwright.config.js
```

---

# Summary

| Component | Purpose |
|-----------|---------|
| JavaScript | Programming language used to write tests |
| Test Runner | Discovers, executes, and reports test results |
| Assertion Library | Confirms expected outcomes |
| Automation Framework | Automates interactions with the application |
| Browser | Runs the web application under test |
| Node.js | Executes JavaScript outside the browser |
| npm | Installs packages and manages project scripts |
| package.json | Defines project configuration and dependencies |
| ES Modules | Modern JavaScript module system (`import` / `export`) |
| CommonJS | Legacy Node.js module system (`require` / `module.exports`) |
````
