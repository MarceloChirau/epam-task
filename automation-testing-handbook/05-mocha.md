````markdown
# 05. Mocha

Mocha is a flexible and widely used JavaScript **test runner** for Node.js and browser-based testing. Unlike Jest, Mocha is minimal and requires additional libraries for assertions, mocking, and coverage.

It is often used with:
- Chai (assertions)
- Sinon (spies/mocks)
- Istanbul/nyc (coverage)

---

# What is Mocha?

Mocha is a **test runner** that provides the structure to execute tests.

It allows you to:

- Organize tests
- Run test suites
- Handle asynchronous tests
- Use hooks for setup/teardown
- Integrate with assertion libraries

Example:

```javascript
describe("Math operations", function () {
    it("should add numbers", function () {
        if (2 + 2 !== 4) throw new Error("Test failed");
    });
});
```

---

# Test Runner

Mocha is primarily a **test runner**, meaning it:

- Finds test files
- Executes test cases
- Reports results
- Supports async execution
- Does NOT include assertions by default

Unlike Jest, Mocha is modular.

---

# Installation

Install Mocha:

```bash
npm install --save-dev mocha
```

Run tests:

```bash
npx mocha
```

Or add script in `package.json`:

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

Run:

```bash
npm test
```

---

# Test Structure

Mocha uses:

- `describe()` → test suite
- `it()` → test case

Example:

```javascript
describe("Array", function () {

    it("should return index of value", function () {
        const arr = [1, 2, 3];
        if (arr.indexOf(2) !== 1) {
            throw new Error("Test failed");
        }
    });

});
```

---

# Hooks

Mocha provides lifecycle hooks to manage test setup and teardown.

## before()

Runs once before all tests:

```javascript
before(function () {
    console.log("Setup before all tests");
});
```

---

## after()

Runs once after all tests:

```javascript
after(function () {
    console.log("Cleanup after all tests");
});
```

---

## beforeEach()

Runs before each test:

```javascript
beforeEach(function () {
    console.log("Before each test");
});
```

---

## afterEach()

Runs after each test:

```javascript
afterEach(function () {
    console.log("After each test");
});
```

---

# Async Tests

Mocha supports asynchronous testing using:

## 1. Done callback

```javascript
it("async test with done", function (done) {
    setTimeout(() => {
        done();
    }, 1000);
});
```

---

## 2. Promises

```javascript
it("promise test", function () {
    return fetchData().then(result => {
        if (result !== "success") {
            throw new Error("Failed");
        }
    });
});
```

---

## 3. Async/Await

```javascript
it("async/await test", async function () {
    const result = await fetchData();
    if (result !== "success") {
        throw new Error("Failed");
    }
});
```

---

# Assertions

Mocha does NOT include assertions by default.

You must use libraries like **Chai**.

Example with Chai:

```javascript
const expect = require("chai").expect;

describe("Math", function () {

    it("should add numbers", function () {
        expect(2 + 2).to.equal(4);
    });

});
```

Common Chai styles:

## Expect style

```javascript
expect(value).to.equal(10);
```

## Should style

```javascript
value.should.equal(10);
```

## Assert style

```javascript
assert.equal(value, 10);
```

---

# Configuration

Mocha can be configured via:

## 1. Command line

```bash
npx mocha --timeout 5000
```

---

## 2. Configuration file (.mocharc.js)

```javascript
module.exports = {
    timeout: 5000,
    reporter: "spec",
    recursive: true
};
```

---

## 3. package.json

```json
{
  "mocha": {
    "timeout": 5000,
    "recursive": true
  }
}
```

---

# Reporters

Reporters define how test results are displayed.

## Default reporter

```bash
npx mocha --reporter spec
```

---

## Common reporters

- spec (default)
- dot
- nyan
- json
- mochawesome (HTML reports)

Example:

```bash
npx mocha --reporter nyan
```

---

## Mochawesome (HTML reports)

Install:

```bash
npm install --save-dev mochawesome
```

Run:

```bash
npx mocha --reporter mochawesome
```

Generates:
- HTML report
- JSON report

---

# Mocha vs Jest

| Feature | Mocha | Jest |
|----------|------|------|
| Type | Test runner | Full testing framework |
| Assertions | External (Chai) | Built-in |
| Mocking | External (Sinon) | Built-in |
| Coverage | External (nyc) | Built-in |
| Configuration | Flexible | Opinionated |
| Setup | Manual | Zero config |
| Speed | Fast | Fast |
| Popularity | High in Node.js | Very high overall |

---

# Mocha Ecosystem

Mocha is often used with:

| Tool | Purpose |
|------|--------|
| Chai | Assertions |
| Sinon | Spies, mocks, stubs |
| NYC | Code coverage |
| Supertest | API testing |
| Mochawesome | HTML reporting |

---

# Example Full Test Setup

```javascript
const expect = require("chai").expect;
const sinon = require("sinon");

function add(a, b) {
    return a + b;
}

describe("Math functions", function () {

    beforeEach(function () {
        console.log("Setup");
    });

    afterEach(function () {
        console.log("Cleanup");
    });

    it("should add numbers", function () {
        expect(add(2, 3)).to.equal(5);
    });

});
```

---

# Summary

| Feature | Description |
|--------|-------------|
| Mocha | Flexible JavaScript test runner |
| describe() | Groups tests |
| it() | Defines test case |
| Hooks | Setup and teardown (before, after, etc.) |
| Async support | done, promises, async/await |
| Assertions | External (Chai) |
| Reporters | Formats test output |
| Mocha vs Jest | Mocha is modular, Jest is all-in-one |
````


