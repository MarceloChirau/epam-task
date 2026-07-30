```markdown
# Page Object Model (POM) with WebdriverIO

---

# Why POM Exists

The **Page Object Model (POM)** is a design pattern used in test automation to improve:

- Maintainability
- Reusability
- Readability
- Scalability

---

## Problem without POM

Without POM, test scripts often become:

- Repetitive
- Hard to maintain
- Difficult to read
- Fragile when UI changes

Example issue:

```javascript
// Repeated selectors everywhere
await $("#username").setValue("admin");
await $("#password").setValue("1234");
await $("#login").click();
```

If a selector changes, you must update it in many places.

---

## Solution with POM

POM separates:

- Page structure (selectors + actions)
- Test logic (test cases)

So UI changes only affect page files, not tests.

---

# Structure

A typical WebdriverIO POM project structure:

```text
project/
│
├── pages/
│   ├── login.page.js
│   ├── home.page.js
│
├── test/
│   ├── login.test.js
│
├── wdio.conf.js
└── package.json
```

---

# pages/login.page.js

This file contains:

- Selectors
- Page actions
- Page-specific functions

```javascript
class LoginPage {

    get username() { return $("#username"); }
    get password() { return $("#password"); }
    get loginBtn() { return $("#login"); }

    async open() {
        await browser.url("/login");
    }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();
```

---

# pages/home.page.js

Represents the home/dashboard page.

```javascript
class HomePage {

    get title() { return $("h1"); }

    async getTitleText() {
        return await this.title.getText();
    }
}

module.exports = new HomePage();
```

---

# tests/login.test.js

Test files use page objects instead of raw selectors.

```javascript
const LoginPage = require("../pages/login.page");
const HomePage = require("../pages/home.page");

describe("Login Feature", () => {

    it("should login successfully", async () => {

        await LoginPage.open();
        await LoginPage.login("admin", "password");

        const title = await HomePage.getTitleText();

        expect(title).toBe("Dashboard");
    });

});
```

---

# Advantages of POM

## 1. Reusability

Page methods can be reused across multiple tests.

---

## 2. Maintainability

If UI changes:

- Only update page files
- No need to change test logic

---

## 3. Readability

Tests become clean and easy to understand:

```javascript
await LoginPage.login("admin", "password");
```

---

## 4. Scalability

Easy to scale large automation frameworks.

---

## 5. Separation of Concerns

- Pages = UI logic
- Tests = business logic

---

# Disadvantages of POM

## 1. Initial Setup Effort

Requires more time to design structure.

---

## 2. More Files

Project becomes larger with many page classes.

---

## 3. Overengineering Risk

For very small projects, POM may be unnecessary.

---

## 4. Learning Curve

Beginners may find it slightly complex initially.

---

# Best Practices (WebdriverIO POM)

## 1. Use Getters for Selectors

```javascript
get loginBtn() { return $("#login"); }
```

---

## 2. One Page = One Class

Each class should represent a single UI page.

---

## 3. Avoid Logic in Tests

Tests should only call page methods.

---

## 4. Use Meaningful Method Names

Good:

```javascript
login(user, pass)
```

Bad:

```javascript
doStuff()
```

---

## 5. Group Related Actions

```javascript
async login(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
}
```

---

## 6. Avoid Duplication

Reuse page methods across tests.

---

## 7. Keep Pages Independent

Pages should not depend heavily on each other.

---

# WebdriverIO-Specific Concepts in POM

## 1. `browser`

Global object used to control the browser:

```javascript
await browser.url("https://example.com");
```

---

## 2. `$` and `$$`

- `$` → single element
- `$$` → multiple elements

```javascript
const input = $("#username");
const items = $$(".list-item");
```

---

## 3. Commands are Async

All WebdriverIO actions are asynchronous:

```javascript
await element.click();
await element.setValue("text");
await element.getText();
```

---

## 4. Expect Assertions

WebdriverIO uses `@wdio/expect`:

```javascript
await expect(HomePage.title).toHaveText("Dashboard");
```

---

# Typical WebdriverIO POM Flow

```text
Test File
   │
   ▼
Page Object (LoginPage)
   │
   ▼
WebdriverIO Commands ($, browser)
   │
   ▼
Browser (Chrome / Firefox)
   │
   ▼
Application
```

---

# Summary

| Concept | Meaning |
|----------|--------|
| POM | Design pattern for test automation |
| pages/ | Contains page classes (UI logic) |
| test/ | Contains test cases (business logic) |
| login.page.js | Encapsulates login page actions |
| home.page.js | Encapsulates home page actions |
| browser | WebdriverIO global controller |
| `$` | Select single element |
| `$$` | Select multiple elements |
| async/await | Required for all WebdriverIO commands |

---

# One-line Definition

> Page Object Model (POM) in WebdriverIO is a design pattern that separates UI selectors and actions into page classes to improve maintainability, reusability, and scalability of test automation frameworks.
```

