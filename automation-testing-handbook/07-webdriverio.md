# WebdriverIO (WDIO) – Complete Guide

WebdriverIO is a modern **browser automation framework** built on top of the WebDriver protocol and Chrome DevTools. It is widely used for UI testing, end-to-end testing, and automation of web applications.

---

# 1. Architecture

WebdriverIO follows a layered architecture: 

```text
Test Scripts
     │
     ▼
WebdriverIO Test Runner
     │
     ▼
WebDriver / DevTools Protocol
     │
     ▼
Browser Driver (ChromeDriver / GeckoDriver)
     │
     ▼
Browser (Chrome / Firefox / Edge)
```

```mermaid
flowchart LR
A[Test Scripts] --> B[WebdriverIO Test Runner]
B --> C[WebDriver/DevTools Protocol]
C --> D[Browser Driver(ChromeDriver/GeckoDriver)]
D --> E[Browser(Chrome/Firefox/Edge)]
```



### Key Components

- **Test Runner** → Executes test files
- **WDIO Client** → Provides API commands
- **Driver Layer** → Communicates with browser
- **Browser** → Executes actions

---

# 2. Selenium vs DevTools

WebdriverIO supports both execution engines.


| Feature         | Selenium              | DevTools                 |
| --------------- | --------------------- | ------------------------ |
| Protocol        | WebDriver             | Chrome DevTools Protocol |
| Speed           | Slower                | Faster                   |
| Browser Support | All major browsers    | Chrome-based browsers    |
| Stability       | High                  | Very high (modern apps)  |
| Use Case        | Cross-browser testing | Fast Chrome automation   |


### Selenium Mode

```text
WDIO → WebDriver → Browser Driver → Browser
```

### DevTools Mode

```text
WDIO → Chrome DevTools → Browser
```

---

# 3. Configuration

WebdriverIO uses a configuration file:

```javascript
// wdio.conf.js

exports.config = {
    runner: "local",

    specs: [
        "./test/specs/**/*.js"
    ],

    maxInstances: 5,

    capabilities: [{
        browserName: "chrome"
    }],

    logLevel: "info",

    framework: "mocha",

    reporters: ["spec"],

    services: ["chromedriver"],

    mochaOpts: {
        timeout: 60000
    }
};
```

### Key Config Sections

- `specs` → test file location
- `capabilities` → browser settings
- `framework` → Mocha / Jasmine / Cucumber
- `services` → drivers and integrations
- `reporters` → test output format

---

# 4. Browser Commands

Browser-level commands control navigation and state.

### Common Commands

```javascript
await browser.url("https://example.com");

await browser.refresh();

await browser.back();

await browser.forward();

await browser.maximizeWindow();

await browser.getTitle();
```

### Window Handling

```javascript
await browser.newWindow("https://google.com");

await browser.switchWindow("google");
```

---

# 5. Element Commands

Element commands interact with UI elements.

### Finding Elements

```javascript
const input = await $("#username");
```

---

### Actions

```javascript
await input.setValue("admin");

await input.click();

await input.clearValue();
```

---

### Text Retrieval

```javascript
const text = await $("h1").getText();
```

---

### Attribute Handling

```javascript
const value = await input.getAttribute("value");
```

---

### State Checks

```javascript
await element.isDisplayed();
await element.isEnabled();
await element.isSelected();
```

---

# 6. Waits

WebdriverIO provides built-in and explicit waits.

### Implicit Wait

```javascript
await browser.setTimeout({ implicit: 5000 });
```

---

### Explicit Wait

```javascript
await $("#login").waitForDisplayed();
await $("#login").waitForClickable();
```

---

### Wait for Text

```javascript
await $("h1").waitForText("Dashboard");
```

---

### Custom Wait

```javascript
await browser.waitUntil(async () => {
    return (await $("#status").getText()) === "Loaded";
});
```

---

# 7. Selectors

WebdriverIO supports multiple selector strategies.

### CSS Selector

```javascript
$("#username");
```

---

### XPath

```javascript
$("//input[@id='username']");
```

---

### Text Selector

```javascript
$("=Login");
```

---

### Partial Text

```javascript
$("*=Log");
```

---

### Attribute Selector

```javascript
$("[data-test='submit']");
```

---

### Chain Selectors

```javascript
$("div.container").$("button.submit");
```

---

# 8. Hooks

Hooks allow execution at different lifecycle stages.

```javascript
exports.config = {

    before: function () {
        console.log("Before all tests");
    },

    beforeEach: function () {
        console.log("Before each test");
    },

    afterEach: function () {
        console.log("After each test");
    },

    after: function () {
        console.log("After all tests");
    }
};
```

### Common Hooks


| Hook       | Purpose                    |
| ---------- | -------------------------- |
| before     | Runs once before all tests |
| beforeEach | Runs before each test      |
| afterEach  | Runs after each test       |
| after      | Runs once after all tests  |


---

# 9. Services

Services extend WebdriverIO functionality.

### Common Services

- chromedriver
- geckodriver
- selenium-standalone
- appium
- docker

### Example

```javascript
services: ["chromedriver"]
```

---

### Custom Service Example

```javascript
class MyService {
    before() {
        console.log("Service started");
    }
}

exports.default = MyService;
```

---

# 10. Reporters

Reporters display test results.

### Built-in Reporters

- spec
- dot
- junit
- allure

### Example

```javascript
reporters: ["spec"]
```

---

### Allure Reporter

```javascript
reporters: ["allure"]
```

Generate report:

```bash
allure generate
allure open
```

---

# 11. Parallel Execution

WebdriverIO supports parallel test execution.

### Configuration

```javascript
maxInstances: 5
```

---

### Per Capability

```javascript
capabilities: [{
    browserName: "chrome",
    maxInstances: 3
}]
```

---

### How It Works

```text
Test Suite
   │
   ├── Test 1 → Chrome Instance 1
   ├── Test 2 → Chrome Instance 2
   ├── Test 3 → Chrome Instance 3
```

---

# Full Example Test

```javascript
describe("Login Test", () => {

    it("should login successfully", async () => {

        await browser.url("https://example.com");

        const username = await $("#username");
        const password = await $("#password");
        const loginBtn = await $("#login");

        await username.setValue("admin");
        await password.setValue("password");
        await loginBtn.click();

        const title = await $("h1").getText();

        expect(title).toBe("Dashboard");
    });

});
```

---

# Summary


| Feature              | Description                                    |
| -------------------- | ---------------------------------------------- |
| Architecture         | Layered system: Test → WDIO → Driver → Browser |
| Selenium vs DevTools | Cross-browser vs fast Chrome automation        |
| Configuration        | Central `wdio.conf.js` file                    |
| Browser Commands     | Control navigation and browser state           |
| Element Commands     | Interact with UI elements                      |
| Waits                | Handle async UI behavior                       |
| Selectors            | Locate elements in DOM                         |
| Hooks                | Lifecycle control                              |
| Services             | Extend functionality                           |
| Reporters            | Test result formatting                         |
| Parallel Execution   | Run tests concurrently                         |


