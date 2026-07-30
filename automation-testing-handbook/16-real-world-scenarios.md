# Real-World Automation Testing Scenarios

## Overview

In real automation projects, tests rarely fail because of simple syntax problems.

Most challenges come from:

- unstable applications
- asynchronous behavior
- authentication complexity
- browser limitations
- environment differences
- CI/CD execution problems

A good automation engineer needs to understand how to handle real-world situations.

---

# 01. Login Flow with MFA(Multi-Factor Authentication)

## Scenario

A user needs to login:

```
Enter username
        |
        ▼
Enter password
        |
        ▼
Receive MFA code
        |
        ▼
Enter verification code
        |
        ▼
Access application
```

---



## Challenge

Traditional automation:

```javascript
await loginPage.login(
    username,
    password
);
```

does not work because MFA requires:

- SMS code
- email code
- authenticator app
- push notification

---



# Possible Solutions



## 1. Disable MFA in test environment

Most common approach.

Example:

```
Production:

User
 |
Password
 |
MFA
 |
Dashboard


Testing:

User
 |
Password
 |
Dashboard
```

---



## 2. Use Test MFA Provider

The application provides a test API:

Example:

```
POST /test/generate-code

Response:

{
 "code": "123456"
}
```

Automation:

```javascript
const code =
await mfaService.getCode();

await loginPage.enterCode(code);
```

---



## 3. Use API Authentication

Instead of logging through UI:

```
API Login

     |

Receive Token

     |

Open Application

     |

Continue Testing
```

---



## Interview Answer

> "For MFA automation, I avoid automating external systems like SMS providers. Usually we disable MFA in test environments, use test accounts with predictable codes, or authenticate through APIs when possible."

---



# 02. Handling Dynamic Elements



## Scenario

Elements change every execution.

Example:

```html
<button id="button_928392">
Login
</button>
```

Next execution:

```html
<button id="button_482920">
Login
</button>
```

---



# Bad Approach

Using dynamic selectors:

```javascript
$("#button_928392")
```

Problem:

The test will break.

---



# Better Approaches



## Use stable attributes

Example:

```html
<button
data-testid="login-button">

Login

</button>
```

Automation:

```javascript
await $(
"[data-testid='login-button']"
).click();
```

---



## Use text selectors

Example:

```javascript
await page.getByText("Login")
.click();
```

---



## Use relative selectors

Example:

```
Form

 |
 ├── Username
 |
 └── Login Button
```

---



# Best Practice

Prefer selectors in this order:

```
1. data-testid

2. id

3. name

4. accessible labels

5. CSS selectors

6. XPath
```

---



# 03. File Uploads and Downloads



# Upload Scenario

Example:

User uploads:

```
Profile Picture

      |

Select File

      |

Upload

      |

Verify
```

---



## Selenium Example

```javascript
await element.sendKeys(
"/path/image.png"
);
```

---



## Playwright Example

```javascript
await page
.locator("#upload")
.setInputFiles(
"image.png"
);
```

---



# Download Scenario

Example:

```
Click Download

      |

Browser downloads file

      |

Verify file exists
```

---

Playwright:

```javascript
const download =
await page.waitForEvent(
"download"
);

await button.click();

await download.saveAs(
"./report.pdf"
);
```

---



# Validation

Check:

- file exists
- correct name
- correct size
- correct content

---



# 04. Waiting for Network Requests



## Problem

Modern applications use:

- AJAX
- APIs
- background requests
- dynamic loading

Example:

```
Click Button

      |

API Request

      |

Data Loading

      |

UI Updated
```

---



# Bad Approach

Fixed waits:

```javascript
sleep(5000);
```

Problems:

- slow tests
- unreliable tests

---



# Better Approach

Wait for specific conditions.

Example:

```javascript
await page.waitForResponse(
response =>
response.url()
.includes("/users")
);
```

---



## Wait for Element

```javascript
await page
.locator(".dashboard")
.waitFor();
```

---



# Rule

Wait for:

```
Expected condition

NOT

Expected time
```

---



# 05. Working with Iframes



## What is an iframe?

An iframe is a webpage inside another webpage.

Example:

```
Main Page

--------------------------------

        iframe

        Payment Form

--------------------------------
```

---



# Problem

Normal selectors cannot access iframe elements.

```html
<iframe id="payment-frame">
    ...
</iframe>

```


if you try(webdriverIO):

```javascript
await $("#card").setValue("1234");
```

WebdriverIO searches in the main page, not inside the iframe, so it will fail with an error such as element not found.


---



# Solution

Switch context.

Playwright:

```javascript
const frame =
page.frame(
{
url:
"payment.com"
}
);

await frame
.locator("#card")
.fill(
"1234"
);
```

---


# Solution with WebdriverIO

```javascript
const frame = await $("#payment-frame");

await browser.switchToFrame(frame);

await $("#card").setValue("1234");


```

When you're finished interacting with the iframe, switch back to the parent document:

```javascript
await browser.switchToParentFrame();

```


# Complete Example

```javascript

// Locate the iframe
const frame = await $("#payment-frame");

// Switch into the iframe
await browser.switchToFrame(frame);

// Interact with elements inside the iframe
await $("#cardNumber").setValue("4111111111111111");
await $("#expiryDate").setValue("12/30");
await $("#cvv").setValue("123");

// Return to the main page
await browser.switchToParentFrame();

// Continue interacting with the main page
await $("#submitOrder").click();

```



# Common iframe Examples

- payment forms
- videos
- advertisements
- external widgets

---



# 06. Multiple Browser Tabs / Windows



## Scenario

Clicking a link opens:

```
Tab 1

Application


Tab 2

External Page
```

---



# Problem

Automation remains connected to the first tab.

---



# Solution

Switch browser context.

Example:

```javascript
const newPage =
await context.waitForEvent(
"page"
);

await link.click();

await newPage.waitForLoadState();
```

---



# Common Uses

- OAuth login
- payment providers
- external documents
- reports

---



# 07. Alerts and Pop-ups



## Types

Browser dialogs:

```
Alert

Confirm

Prompt
```

---



# Example

Application shows:

```
Are you sure?

[OK]

[Cancel]
```

---



# Handling

Playwright:

```javascript
page.on(
"dialog",
async dialog => {

await dialog.accept();

});
```

---



# Pop-up Windows

Example:

```
Click Login

     |

Google Authentication Window
```

Solution:

Handle new page event.

---



# 08. Retry Strategies



## Why retries?

Some failures are temporary:

- network delay
- slow server
- unstable environment

---



# Example

Without retry:

```
Test fails

↓

Manual investigation

↓

Temporary issue
```

---

With retry:

```
Test fails

↓

Retry

↓

Pass
```

---



# Retry Configuration

Example:

```javascript
retries: 2
```

Meaning:

```
First attempt

↓

Second attempt

↓

Third attempt
```

---



# Important

Retries should not hide real bugs.

Bad:

```
Every test has 10 retries
```

Good:

```
Limited retries
+
Failure investigation
```

---



# 09. Handling Flaky Tests



## What is a flaky test?

A test that:

```
Sometimes passes

Sometimes fails

Without code changes
```

---



# Common Causes



## Timing issues

Example:

```
Test clicks button

Before button appears
```

---

Solution:

Use explicit waits.

---



## Environment problems

Examples:

- slow server
- unstable API
- database problems

---



## Bad Test Data

Example:

Two tests use:

```
same username
```

One test deletes it.

Another test fails.

---



# How to Fix Flaky Tests



## 1. Improve waits

Avoid:

```javascript
sleep()
```

Use:

```javascript
waitForElement()
```

---



## 2. Isolate tests

Each test should:

- create own data
- clean after execution

---



## 3. Improve selectors

Avoid unstable locators.

---



# 10. Parallel Execution Issues



## What is parallel execution?

Running multiple tests at the same time.

Example:

```
Worker 1

Login Test


Worker 2

Checkout Test


Worker 3

Profile Test
```

---



# Benefits

- faster execution
- better CI performance

---



# Problems



## Shared Data

Example:

Test 1:

```
Creates user:
john@test.com
```

Test 2:

```
Creates same user
```

Result:

Conflict.

---



## Shared Browser State

Problem:

Cookies/session overlap.

---



# Solutions



## Separate test data

Example:

```
user1@test.com

user2@test.com
```

---



## Independent environments

Each worker gets:

```
Own database

Own account

Own browser context
```

---



# 11. CI Pipeline Failures and Debugging



## Scenario

Local:

```
Tests pass
```

CI:

```
Tests fail
```

---



# Common Reasons



## Environment Differences

Example:

Local:

```
Chrome version 120
```

CI:

```
Chrome version 118
```

---



## Missing Variables

Example:

Local:

```
BASE_URL exists
```

CI:

```
undefined
```

---



## Timing Differences

CI machines are usually slower.

---



# Debugging Process



## Step 1

Read the error.

Example:

```
Element not found
```

---



## Step 2

Check screenshots/videos.

Example:

```
Failure screenshot:

Login page still loading
```

---



## Step 3

Check logs.

Example:

```
API returned 500
```

---



## Step 4

Reproduce locally.

Run:

```
same browser

same environment

same command
```

---



# CI Best Practices



## Store artifacts

Save:

- screenshots
- videos
- logs
- reports

---



## Use headless mode

Example:

```
Chrome Headless
```

---



## Keep environments identical

Use:

```
Docker

Same dependencies

Same browser versions
```

---



# Complete Real-World Execution Example

Scenario:

User completes checkout.

```
Test starts

      |

Create test user

      |

Login

      |

Handle MFA

      |

Navigate pages

      |

Wait for API response

      |

Upload document

      |

Switch payment iframe

      |

Handle popup

      |

Complete checkout

      |

Generate report
```

---



# Interview Explanation

If asked:

**"How do you handle difficult automation scenarios?"**

Answer:

> "In real projects, most automation challenges come from synchronization, unstable elements, authentication, and environment differences. I handle them by using stable selectors, explicit waits, Page Objects, proper test data management, fixtures, retries when appropriate, and strong CI debugging practices. The goal is to create reliable tests that fail only when there is a real application problem."

---



# Key Takeaways


| Challenge        | Solution                            |
| ---------------- | ----------------------------------- |
| MFA              | Test accounts, API authentication   |
| Dynamic elements | Stable selectors                    |
| File upload      | setInputFiles/sendKeys              |
| Network waits    | Wait for conditions                 |
| Iframes          | Switch frame context                |
| Multiple tabs    | Handle new pages                    |
| Alerts           | Dialog handlers                     |
| Retries          | Limited retries                     |
| Flaky tests      | Better synchronization              |
| Parallel tests   | Isolated data                       |
| CI failures      | Logs, artifacts, environment checks |


