# Faker.js

## What is Faker?

**Faker** is an open-source JavaScript library that generates realistic fake data for testing and development.

It helps create dynamic test data such as:

- Names
- Email addresses
- Passwords
- Phone numbers
- Addresses
- Dates
- Company names
- Product names
- Numbers
- UUIDs

Instead of hardcoding values, Faker generates realistic random data every time your tests run.

---

# Why Use Faker?

Without Faker:

```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@test.com"
};
```

Problems:

- Duplicate data
- Email already exists
- Difficult to maintain
- Unrealistic test scenarios

With Faker:

```javascript
import { faker } from '@faker-js/faker';

const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
};
```

Each test execution generates unique values.

---

# Installation

Using npm:

```bash
npm install @faker-js/faker
```

Using yarn:

```bash
yarn add @faker-js/faker
```

Using pnpm:

```bash
pnpm add @faker-js/faker
```

---

# Importing Faker

## ES Modules (Recommended)

```javascript
import { faker } from '@faker-js/faker';
```

---

## CommonJS

```javascript
const { faker } = require('@faker-js/faker');
```

---

# Basic Usage

```javascript
import { faker } from '@faker-js/faker';

console.log(faker.person.firstName());
console.log(faker.person.lastName());
console.log(faker.internet.email());
```

Example output:

```text
Sophia
Johnson
sophia.johnson@example.com
```

---

# Most Used APIs

## Person

Generate personal information.

```javascript
faker.person.firstName();

faker.person.lastName();

faker.person.fullName();

faker.person.jobTitle();

faker.person.gender();

faker.person.bio();
```

Example:

```text
Emma
Smith
Emma Smith
Software Engineer
```

---

## Internet

Useful for login and registration tests.

```javascript
faker.internet.email();

faker.internet.username();

faker.internet.password();

faker.internet.url();

faker.internet.domainName();

faker.internet.ip();
```

Example:

```text
emma.smith@example.com
cool_user42
MySecurePassword123!
https://example.com
```

---

## Location

Generate addresses.

```javascript
faker.location.city();

faker.location.country();

faker.location.streetAddress();

faker.location.zipCode();

faker.location.state();
```

Example:

```text
London
United Kingdom
221B Baker Street
NW1
```

---

## Phone

```javascript
faker.phone.number();
```

Example:

```text
+44 7700 900123
```

---

## Company

```javascript
faker.company.name();

faker.company.catchPhrase();

faker.company.buzzPhrase();
```

Example:

```text
Tech Solutions Ltd
Innovative cloud services
```

---

## Commerce

Useful for e-commerce testing.

```javascript
faker.commerce.productName();

faker.commerce.department();

faker.commerce.price();
```

Example:

```text
Wireless Keyboard
Electronics
49.99
```

---

## Number

```javascript
faker.number.int();

faker.number.int({ min: 1, max: 100 });

faker.number.float();

faker.number.float({
    min: 0,
    max: 100,
    fractionDigits: 2
});
```

Example:

```text
42
87
13.57
```

---

## Date

```javascript
faker.date.birthdate();

faker.date.past();

faker.date.future();

faker.date.recent();
```

Example:

```text
1998-03-15
2024-08-10
2027-01-12
```

---

## String

Useful for IDs and random values.

```javascript
faker.string.uuid();

faker.string.alphanumeric(10);

faker.string.alpha(8);

faker.string.numeric(6);
```

Example:

```text
550e8400-e29b-41d4-a716-446655440000
A7B2C8D9EF
```

---

## Helpers

Randomly select or generate collections.

```javascript
faker.helpers.arrayElement([
    "Admin",
    "User",
    "Guest"
]);

faker.helpers.multiple(
    () => faker.person.firstName(),
    { count: 5 }
);
```

Example:

```text
User

[
    "Emma",
    "John",
    "Sophia",
    "Liam",
    "Oliver"
]
```

---

# Creating Test Objects

Instead of generating one value at a time, create complete objects.

```javascript
import { faker } from '@faker-js/faker';

const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    city: faker.location.city(),
    phone: faker.phone.number()
};

console.log(user);
```

Example output:

```javascript
{
    firstName: "Emma",
    lastName: "Wilson",
    email: "emma.wilson@example.com",
    password: "P@ssw0rd123!",
    city: "Manchester",
    phone: "+44 7700 900123"
}
```

---

# Using Faker with WebdriverIO

```javascript
import { faker } from '@faker-js/faker';

describe("Registration", () => {

    it("should register a new user", async () => {

        const email = faker.internet.email();
        const password = faker.internet.password();

        await browser.url("/register");

        await $("#email").setValue(email);
        await $("#password").setValue(password);

        await $("#register").click();

        await expect($("#success")).toBeDisplayed();

    });

});
```

---

# Best Practices

✅ Generate only the data you need.

✅ Create reusable factory/helper functions.

```javascript
export function createUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}
```

Use it in tests:

```javascript
const user = createUser();
```

---

## Use Seeded Data (Optional)

Sometimes you want predictable results.

```javascript
faker.seed(123);
```

Every run now generates the same fake values.

Useful for debugging and reproducible tests.

---

# Common Use Cases

- User registration
- Login testing
- Checkout forms
- Address forms
- API request payloads
- Database seeding
- Performance testing
- Data-driven testing

---

# Advantages

- Generates realistic data
- Eliminates duplicate test data
- Easy to use
- Large API
- Open source
- Framework independent
- Works with WebdriverIO, Playwright, Jest, Mocha, Cypress, etc.

---

# Disadvantages

- Random data may make debugging harder
- Generated values may not always satisfy business rules
- Excessive randomness can reduce test reproducibility

---

# Common Interview Questions

### What is Faker?

A JavaScript library for generating realistic fake data for testing and development.

---

### Is Faker part of WebdriverIO?

No.

Faker is an independent JavaScript library that works with any testing framework or Node.js application.

---

### Why use Faker instead of hardcoded values?

- Prevent duplicate data
- Create realistic test scenarios
- Reduce maintenance
- Generate unique values for every test

---

### When should you avoid random data?

When tests require deterministic or repeatable results. In those cases, use fixed test data or `faker.seed()`.

---

# Official Resources

Documentation

https://fakerjs.dev/

API Reference

https://fakerjs.dev/api/

GitHub

https://github.com/faker-js/faker

---

# Key Takeaways

- Faker generates realistic fake data.
- It is independent of WebdriverIO or Playwright.
- It is commonly used for UI, API, and integration testing.
- Use Faker to avoid hardcoded and duplicate test data.
- Learn the `person`, `internet`, `location`, `number`, `date`, `company`, `commerce`, and `helpers` modules first—they cover most automation testing needs.