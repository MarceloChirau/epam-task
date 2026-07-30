````markdown
# Playwright Testing Guide

Playwright is a modern end-to-end testing framework for web applications. It provides fast, reliable, and powerful browser automation with built-in waiting, tracing, and multi-browser support.

---

# 1. Browser Context

A **Browser Context** is an isolated session inside a browser.

Think of it as:

> A fresh incognito window for every test

### Key features:

- Isolated cookies
- Separate local storage
- Independent sessions
- Parallel-safe execution

### Example:

```javascript
const context = await browser.newContext();
const page = await context.newPage();
```

### Why it matters:

- Prevents test interference
- Enables parallel execution safely
- Simulates real user sessions

---

# 2. Page

A **Page** represents a single tab in the browser.

### Example:

```javascript
const page = await context.newPage();

await page.goto("https://example.com");
```

### Page can:

- Navigate URLs
- Click elements
- Fill forms
- Extract text
- Execute scripts

### Example actions:

```javascript
await page.click("#login");
await page.fill("#username", "admin");
await page.textContent("h1");
```

---

# 3. Locator

A **Locator** is Playwright’s smart element selector.

### Why Locators are powerful:

- Auto-waiting built-in
- Retry mechanism
- Always up-to-date element reference

### Example:

```javascript
const loginButton = page.locator("#login");

await loginButton.click();
```

### Common locator types:

```javascript
page.locator("text=Login");
page.locator("#id");
page.locator(".class");
page.locator("[data-test='submit']");
```

---

# 4. Auto-Waiting

Playwright automatically waits for elements before interacting.

### It waits for:

- Element to be visible
- Element to be attached to DOM
- Element to be stable
- Actionability (clickable, enabled)

### Example:

```javascript
await page.click("#submit");
```

No need for:

```javascript
waitForTimeout ❌
sleep ❌
explicit waits ❌
```

### Benefit:

> Reduces flaky tests significantly

---

# 5. Tracing

Tracing records everything during test execution.

### It captures:

- Actions
- Screenshots
- Network requests
- DOM snapshots
- Console logs

### Enable tracing:

```javascript
await context.tracing.start({ screenshots: true, snapshots: true });

await page.goto("https://example.com");

await context.tracing.stop({ path: "trace.zip" });
```

### Use case:

- Debugging failed tests
- CI failure analysis

---

# 6. Fixtures

Fixtures provide reusable test setup and teardown.

### Example:

```javascript
import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
});
```

### Built-in fixtures:

- `page`
- `context`
- `browser`

### Custom fixture example:

```javascript
test.extend({
    loginPage: async ({ page }, use) => {
        await page.goto("/login");
        await use(page);
    }
});
```

---

# 7. Screenshots

Playwright can capture screenshots for debugging.

### Full page screenshot:

```javascript
await page.screenshot({ path: "full.png", fullPage: true });
```

### Element screenshot:

```javascript
await page.locator("#header").screenshot({ path: "header.png" });
```

### Use cases:

- Failure debugging
- Visual validation
- CI reporting

---

# 8. Videos

Playwright can record test execution videos.

### Enable in config:

```javascript
use: {
    video: "on"
}
```

### Options:

- `off`
- `on`
- `retain-on-failure`
- `on-first-retry`

### Example output:

- MP4 file per test
- Stored in test-results folder

---

# 9. API Testing

Playwright supports API testing without browser UI.

### Example:

```javascript
import { request } from "@playwright/test";

const apiContext = await request.newContext();

const response = await apiContext.get("https://api.example.com/users");

console.log(await response.json());
```

### You can:

- GET requests
- POST requests
- PUT / DELETE requests
- Validate responses

### Example POST:

```javascript
await apiContext.post("/login", {
    data: {
        username: "admin",
        password: "1234"
    }
});
```

---

# 10. Parallel Execution

Playwright runs tests in parallel by default.

### Example:

```text
Test 1 → Worker 1
Test 2 → Worker 2
Test 3 → Worker 3
```

### Config:

```javascript
workers: 4
```

### Key points:

- Each worker runs independently
- Uses isolated browser contexts
- Improves execution speed

---

# 11. Playwright vs Selenium

| Feature | Playwright | Selenium |
|----------|------------|----------|
| Speed | Fast | Slower |
| Auto-waiting | Built-in | Manual waits required |
| Setup | Simple | Complex |
| Browser support | Modern browsers | Very wide |
| Flakiness | Low | Higher |
| API testing | Built-in | External tools needed |
| Parallel execution | Native | Requires Grid |

---

# Key Differences Explained

### 1. Architecture

- Playwright → Direct browser communication
- Selenium → WebDriver protocol

---

### 2. Waiting Strategy

- Playwright → Auto-waiting
- Selenium → Explicit waits required

---

### 3. Test Stability

Playwright reduces:

- flaky tests
- timing issues
- synchronization problems

---

# Complete Playwright Flow

```text
Test File
   │
   ▼
Test Runner (Playwright Test)
   │
   ▼
Fixtures (page/context)
   │
   ▼
Locator (smart element)
   │
   ▼
Auto-waiting engine
   │
   ▼
Browser Context
   │
   ▼
Browser (Chromium / Firefox / WebKit)
```

---

# Summary

| Concept | Purpose |
|----------|--------|
| Browser Context | Isolated session per test |
| Page | Single browser tab |
| Locator | Smart element selector |
| Auto-waiting | Built-in synchronization |
| Tracing | Debugging tool |
| Fixtures | Reusable test setup |
| Screenshots | Visual debugging |
| Videos | Test execution recording |
| API Testing | Backend validation |
| Parallel Execution | Faster test runs |
| Selenium Comparison | Playwright is faster, simpler, and more stable |
````


