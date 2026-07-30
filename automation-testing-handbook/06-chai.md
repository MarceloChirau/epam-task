```markdown
# 06. Chai

Chai is a popular **assertion library** for JavaScript testing. It is commonly used with Mocha to write readable and expressive test assertions.

Chai provides three different assertion styles:

- expect
- should
- assert

---

# What is Chai?

Chai is used to **verify expected outcomes** in tests.

It helps answer questions like:

- Is the value correct?
- Does the array contain an item?
- Is the response equal to expected output?

Example:

```javascript
const chai = require("chai");
const expect = chai.expect;

expect(2 + 2).to.equal(4);
```

---

# 1. Expect Style

The **expect** style is the most widely used and recommended.

It is clean, readable, and chainable.

## Basic Example

```javascript
const expect = require("chai").expect;

expect(value).to.equal(5);
```

---

## Common Assertions (Expect)

### Equality

```javascript
expect(value).to.equal(5);
expect(value).to.eql({ name: "John" });
```

---

### Length

```javascript
expect(arr).to.have.length(3);
```

---

### Type Checking

```javascript
expect(value).to.be.a("string");
expect(value).to.be.an("array");
```

---

### Boolean Checks

```javascript
expect(flag).to.be.true;
expect(flag).to.be.false;
```

---

### Inclusion

```javascript
expect([1, 2, 3]).to.include(2);
expect("hello world").to.include("world");
```

---

### Object Properties

```javascript
expect(user).to.have.property("name");
expect(user).to.have.property("age", 25);
```

---

### Null / Undefined

```javascript
expect(value).to.be.null;
expect(value).to.be.undefined;
```

---

# 2. Should Style

The **should** style extends Object prototypes and allows natural language assertions.

## Setup

```javascript
const chai = require("chai");
chai.should();
```

---

## Example

```javascript
value.should.equal(5);
```

---

## Common Assertions (Should)

### Equality

```javascript
value.should.equal(10);
```

---

### Length

```javascript
arr.should.have.length(3);
```

---

### Type

```javascript
value.should.be.a("string");
```

---

### Inclusion

```javascript
arr.should.include(2);
```

---

### Property

```javascript
user.should.have.property("name");
```

---

⚠️ Note:
- Should style modifies prototypes
- Not recommended in strict environments

---

# 3. Assert Style

The **assert** style is similar to Node.js built-in assertions.

It is more traditional and less chainable.

## Setup

```javascript
const assert = require("chai").assert;
```

---

## Example

```javascript
assert.equal(value, 5);
```

---

## Common Assertions (Assert)

### Equality

```javascript
assert.equal(value, 10);
assert.strictEqual(value, 10);
```

---

### Deep Equality

```javascript
assert.deepEqual(obj, { name: "John" });
```

---

### Type

```javascript
assert.typeOf(value, "string");
```

---

### Length

```javascript
assert.lengthOf(arr, 3);
```

---

### Inclusion

```javascript
assert.include([1, 2, 3], 2);
```

---

### Truthy / Falsy

```javascript
assert.isTrue(flag);
assert.isFalse(flag);
```

---

# Comparison of Styles

| Style | Syntax | Readability | Usage |
|------|--------|-------------|------|
| expect | expect(value).to.equal(5) | High | Recommended |
| should | value.should.equal(5) | Natural language | Optional |
| assert | assert.equal(value, 5) | Simple | Legacy style |

---

# When to Use Which?

## Use expect when:
- You want clean and modern syntax
- You are working in most test frameworks
- You want best readability

## Use should when:
- You prefer natural language style
- You are okay with prototype extension

## Use assert when:
- You want simple function-based assertions
- You are coming from Node.js background

---

# Chai with Mocha Example

```javascript
const expect = require("chai").expect;

describe("Math operations", function () {

    it("should add numbers correctly", function () {
        const result = 2 + 3;
        expect(result).to.equal(5);
    });

    it("should check array length", function () {
        const arr = [1, 2, 3];
        expect(arr).to.have.length(3);
    });

});
```

---

# Advanced Assertions

## Nested Objects

```javascript
expect(user).to.have.nested.property("address.city");
```

---

## Deep Equality

```javascript
expect(obj).to.deep.equal({
    name: "John",
    age: 30
});
```

---

## Chaining

```javascript
expect(value)
    .to.be.a("number")
    .and.to.be.greaterThan(0);
```

---

# Plugins

Chai supports plugins for extended functionality:

- chai-http (API testing)
- chai-as-promised (async assertions)
- chai-json-schema (schema validation)

Example:

```javascript
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
```

---

# Summary

| Feature | Description |
|--------|-------------|
| Chai | Assertion library for JavaScript testing |
| expect | Most popular, chainable syntax |
| should | Natural language style assertions |
| assert | Simple function-based assertions |
| Common use | Used with Mocha for testing |
| Strength | Readability and flexibility |
```

