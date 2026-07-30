
# 04. Jest

Jest is a powerful JavaScript testing framework developed by Facebook. It is widely used for unit testing, integration testing, and snapshot testing in modern JavaScript applications.

It comes with everything built-in:
- Test runner
- Assertion library
- Mocking system
- Code coverage tools

---

# What is Jest?

Jest is a **JavaScript testing framework** that allows you to:

- Write and run tests
- Assert expected results
- Mock functions and modules
- Test asynchronous code
- Generate coverage reports
- Perform snapshot testing

Example:

```javascript
test("adds numbers", () => {
    expect(2 + 2).toBe(4);
});
```

---

# Installation

Install Jest using npm:

```bash
npm install --save-dev jest
```

Add a test script in `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Run tests:

```bash
npm test
```

Or directly:

```bash
npx jest
```

---

# describe()

`describe()` is used to group related tests together.

Example:

```javascript
describe("Math operations", () => {

    test("addition", () => {
        expect(2 + 2).toBe(4);
    });

    test("subtraction", () => {
        expect(5 - 2).toBe(3);
    });

});
```

Benefits:
- Organizes tests logically
- Improves readability
- Groups setup/teardown logic

---

# test()

`test()` defines an individual test case.

Syntax:

```javascript
test("description", () => {
    // test logic
});
```

Example:

```javascript
test("user is logged in", () => {
    const isLoggedIn = true;
    expect(isLoggedIn).toBe(true);
});
```

You can also use `it()` (alias of `test()`):

```javascript
it("works the same way", () => {
    expect(true).toBe(true);
});
```

---

# expect()

`expect()` is used to create assertions.

Example:

```javascript
expect(value).toBe(10);
```

Common matchers:

```javascript
expect(value).toBe(5);              // strict equality
expect(obj).toEqual({a: 1});        // deep equality
expect(array).toContain("item");    // array contains
expect(value).toBeTruthy();         // truthy check
expect(value).toBeFalsy();          // falsy check
expect(fn).toThrow();              // error check
```

---

# beforeEach()

Runs before each test in a `describe()` block.

Example:

```javascript
describe("User tests", () => {

    let user;

    beforeEach(() => {
        user = { name: "John" };
    });

    test("user name exists", () => {
        expect(user.name).toBe("John");
    });

});
```

Use cases:
- Reset state
- Initialize data
- Setup test environment

---

# afterEach()

Runs after each test.

Example:

```javascript
afterEach(() => {
    console.log("Test finished");
});
```

Use cases:
- Cleanup
- Reset mocks
- Clear database state

---

# Mocks

Mocks replace real implementations with fake ones.

Example:

```javascript
const fetchData = jest.fn();

fetchData.mockReturnValue("mock data");

test("mock function", () => {
    expect(fetchData()).toBe("mock data");
});
```

Mocking modules:

```javascript
jest.mock("./api");
```

Use cases:
- Avoid real API calls
- Control test data
- Improve test speed

---

# Spies

Spies track function calls without replacing implementation.

Example:

```javascript
const obj = {
    greet: () => "hello"
};

const spy = jest.spyOn(obj, "greet");

obj.greet();

expect(spy).toHaveBeenCalled();
```

You can also mock implementation:

```javascript
spy.mockImplementation(() => "mocked");
```

---

# Snapshots

Snapshots capture the output of a component or object and compare it over time.

Example:

```javascript
test("snapshot test", () => {
    const user = { name: "John", age: 30 };

    expect(user).toMatchSnapshot();
});
```

First run creates snapshot:

```
__snapshots__/file.test.js.snap
```

Subsequent runs compare against it.

Use cases:
- UI testing
- React components
- Prevent unintended changes

---

# Async Testing

Jest supports asynchronous testing using `async/await`.

Example:

```javascript
test("async function", async () => {
    const data = await fetchData();
    expect(data).toBe("success");
});
```

Using Promises:

```javascript
test("promise test", () => {
    return fetchData().then(data => {
        expect(data).toBe("success");
    });
});
```

Handling errors:

```javascript
test("error test", async () => {
    await expect(fetchData()).rejects.toThrow();
});
```

---

# Coverage

Jest can generate code coverage reports.

Run:

```bash
npx jest --coverage
```

Output includes:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

Example output:

```
File        | % Stmts | % Branch | % Funcs | % Lines
------------|---------|----------|---------|--------
app.js      |  90%    |  85%     |  100%   |  90%
```

Coverage helps identify:
- Untested code
- Dead code
- Risk areas

---

# Summary

| Feature | Purpose |
|--------|--------|
| Jest | JavaScript testing framework |
| describe() | Groups related tests |
| test() | Defines a test case |
| expect() | Creates assertions |
| beforeEach() | Runs setup before each test |
| afterEach() | Runs cleanup after each test |
| Mocks | Replace real functions/modules |
| Spies | Track function calls |
| Snapshots | Compare stored output over time |
| Async testing | Handles promises and async code |
| Coverage | Measures how much code is tested |
````
