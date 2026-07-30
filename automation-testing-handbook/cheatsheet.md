# Cheatsheet for Automation Testing

> A quick reference for commonly used commands, syntax, selectors, JavaScript concepts, and HTTP status codes.

---

# Git Commands

## Clone Repository

```bash
git clone <repository-url>
```

---

## Check Status

```bash
git status
```

---

## Add Files

```bash
git add .
```

```bash
git add filename.js
```

---

## Commit Changes

```bash
git commit -m "Added login tests"
```

---

## Push Changes

```bash
git push
```

---

## Pull Latest Changes

```bash
git pull
```

---

## Create New Branch

```bash
git checkout -b feature/login-tests
```

---

## Switch Branch

```bash
git checkout main
```

---

## List Branches

```bash
git branch
```

---

## Merge Branch

```bash
git merge feature/login-tests
```

---

## View Commit History

```bash
git log
```

---

## View Short History

```bash
git log --oneline
```

---

## Restore File

```bash
git restore filename.js
```

---

## Reset Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

---

## Fetch Remote Changes

```bash
git fetch
```

---

# npm Commands

## Initialize Project

```bash
npm init
```

---

## Install Dependency

```bash
npm install package-name
```

---

## Install Development Dependency

```bash
npm install --save-dev package-name
```

---

## Install All Dependencies

```bash
npm install
```

---

## Remove Package

```bash
npm uninstall package-name
```

---

## Update Packages

```bash
npm update
```

---

## List Installed Packages

```bash
npm list
```

---

## Show Outdated Packages

```bash
npm outdated
```

---

## Run Script

```bash
npm run test
```

---

## Execute Package

```bash
npx package-name
```

---

# Playwright Commands

## Install

```bash
npm init playwright@latest
```

---

## Run All Tests

```bash
npx playwright test
```

---

## Run Specific File

```bash
npx playwright test login.spec.js
```

---

## Run Specific Test

```bash
npx playwright test -g "Login"
```

---

## Run Headed

```bash
npx playwright test --headed
```

---

## Run Specific Browser

```bash
npx playwright test --project=chromium
```

---

## Generate Code

```bash
npx playwright codegen
```

---

## Show HTML Report

```bash
npx playwright show-report
```

---

# WebdriverIO Commands

## Create Project

```bash
npm init wdio@latest
```

---

## Run Mocha Configuration

```bash
npx wdio run config/wdio.mocha.conf.js
```

---

## Run Cucumber Configuration

```bash
npx wdio run config/wdio.cucumber.conf.js
```

---

## Run Specific Spec

```bash
npx wdio run config/wdio.mocha.conf.js --spec ./tests/login.spec.js
```

---

## Run Specific Feature

```bash
npx wdio run config/wdio.cucumber.conf.js --spec ./features/login.feature
```

---

## Run Chrome Only

```bash
npx wdio run config/wdio.conf.js --capabilities browserName=chrome
```

---

# Jest Commands

## Install

```bash
npm install --save-dev jest
```

---

## Run All Tests

```bash
npx jest
```

---

## Run Specific File

```bash
npx jest login.test.js
```

---

## Watch Mode

```bash
npx jest --watch
```

---

## Coverage

```bash
npx jest --coverage
```

---

# Mocha Commands

## Install

```bash
npm install --save-dev mocha
```

---

## Run Tests

```bash
npx mocha
```

---

## Run Specific File

```bash
npx mocha tests/login.spec.js
```

---

## Watch Mode

```bash
npx mocha --watch
```

---

# XPath Cheatsheet

## Absolute XPath

```xpath
/html/body/div/input
```

---

## Relative XPath

```xpath
//input
```

---

## By ID

```xpath
//*[@id='username']
```

---

## By Class

```xpath
//*[@class='btn']
```

---

## By Text

```xpath
//*[text()='Login']
```

---

## Contains Text

```xpath
//*[contains(text(),'Login')]
```

---

## Contains Attribute

```xpath
//button[contains(@class,'primary')]
```

---

## Starts With

```xpath
//input[starts-with(@id,'user')]
```

---

## Parent

```xpath
//input/..
```

---

## Following Sibling

```xpath
//label/following-sibling::input
```

---

## Child

```xpath
//form/input
```

---

# CSS Selectors Cheatsheet

## By ID

```css
#username
```

---

## By Class

```css
.login-button
```

---

## By Element

```css
input
```

---

## Element with Class

```css
button.primary
```

---

## Attribute

```css
input[name='email']
```

---

## Starts With

```css
input[id^='user']
```

---

## Ends With

```css
input[id$='name']
```

---

## Contains

```css
input[id*='user']
```

---

## Child

```css
form > input
```

---

## Descendant

```css
form input
```

---

## First Child

```css
li:first-child
```

---

## Last Child

```css
li:last-child
```

---

## nth Child

```css
li:nth-child(3)
```

---

# Regular Expressions (Regex)

## Any Character

```regex
.
```

---

## Zero or More

```regex
*
```

---

## One or More

```regex
+
```

---

## Optional

```regex
?
```

---

## Start of String

```regex
^
```

---

## End of String

```regex
$
```

---

## Digits

```regex
\d
```

---

## Letters and Numbers

```regex
\w
```

---

## Whitespace

```regex
\s
```

---

## Character Set

```regex
[a-z]
```

---

## Not Character Set

```regex
[^0-9]
```

---

## Example Email

```regex
^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$
```

---

# JavaScript Array Methods

| Method | Purpose |
|----------|---------|
| push() | Add item to end |
| pop() | Remove last item |
| shift() | Remove first item |
| unshift() | Add item to beginning |
| map() | Transform array |
| filter() | Filter items |
| find() | First matching item |
| findIndex() | Index of matching item |
| some() | At least one matches |
| every() | All match |
| includes() | Contains value |
| indexOf() | Find index |
| forEach() | Iterate array |
| reduce() | Reduce to one value |
| sort() | Sort array |
| reverse() | Reverse array |
| slice() | Copy portion |
| splice() | Add/remove items |

---

# Promises

## Create Promise

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});
```

---

## Then

```javascript
promise.then(result => {

    console.log(result);

});
```

---

## Catch

```javascript
promise.catch(error => {

    console.log(error);

});
```

---

## Finally

```javascript
promise.finally(() => {

    console.log("Finished");

});
```

---

## Promise.all()

```javascript
await Promise.all([

    task1(),
    task2(),
    task3()

]);
```

---

# Async / Await

## Async Function

```javascript
async function login() {

}
```

---

## Await Promise

```javascript
await LoginPage.login();
```

---

## Try/Catch

```javascript
try {

    await LoginPage.login();

}
catch(error){

    console.log(error);

}
```

---

## Sequential Execution

```javascript
await open();

await login();

await logout();
```

---

## Parallel Execution

```javascript
await Promise.all([

    open(),
    login()

]);
```

---

# HTTP Status Codes

## Informational

| Code | Meaning |
|------|----------|
|100|Continue|
|101|Switching Protocols|

---

## Success

| Code | Meaning |
|------|----------|
|200|OK|
|201|Created|
|202|Accepted|
|204|No Content|

---

## Redirection

| Code | Meaning |
|------|----------|
|301|Moved Permanently|
|302|Found|
|304|Not Modified|

---

## Client Errors

| Code | Meaning |
|------|----------|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|405|Method Not Allowed|
|408|Request Timeout|
|409|Conflict|
|422|Unprocessable Entity|
|429|Too Many Requests|

---

## Server Errors

| Code | Meaning |
|------|----------|
|500|Internal Server Error|
|501|Not Implemented|
|502|Bad Gateway|
|503|Service Unavailable|
|504|Gateway Timeout|

---

# Most Common Interview Commands

## Git

```bash
git status
git add .
git commit -m "message"
git pull
git push
```

---

## npm

```bash
npm install
npm run test
npm update
npx package-name
```

---

## Playwright

```bash
npx playwright test
npx playwright codegen
npx playwright show-report
```

---

## WebdriverIO

```bash
npx wdio run config/wdio.mocha.conf.js
npx wdio run config/wdio.cucumber.conf.js
```

---

## JavaScript

```javascript
map()

filter()

find()

reduce()

Promise.all()

async/await
```

---

## Selectors

```css
#id

.class

input[name='email']
```

```xpath
//*[@id='email']

//button[text()='Login']

//input[contains(@id,'user')]
```

---

## HTTP

```
200 OK
201 Created
204 No Content

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found

500 Internal Server Error
503 Service Unavailable
```