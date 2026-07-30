## What is software testing?
Software testing is the process of verifying and validating that a software application behaves as expected and meets its specified requirements.  
The goal is to identify defects before the software reaches users and to improve the overall quality,reliability and maintainability of the product.

### Objectives of Testing
- Find defects early
- Verify requirements are met
- Validate user expectations
- Reduce business risk
- Increase confidence before release


## Why testing matters
Testing is not about proving that software is perfect  but is about the risk of failures.

**Without testing, software may:**
- Crash unexpectedly
- Produce incorrect results
- Expose security vulnerabilities
- Lose user data
- Create a poor user experience

**Benefits include:**
- Higher software quality
- Lower maintenance costs
- Faster development cycles
- Greater customer confidence



**Verification vs Validation:**
Although these terms are often used together, they answer different questions.

| Verification | Validation |
|--------------|------------|
|Are we building the product correctly?| Are we building the right product?|
|Checks specification and design | Checks user needs and expectations|
|Usually static activities | Usually dynamic activities|
|Happens during development|Happens after iplementation|

### Verification Examples
- Code reviews
- Design reviews
- Requirement reviews
- Static analysis

### Validating Examples
- Manual testing
- Automated testing
- User Acceptance Testing (UAT)

**Easy way to remember**
> Verification = Build it right.
> Validation = Build the right thing.


## Error, Defect (Bug), and Failure
These three terms are closely related but describe different stages of a problem.

### Error
A human mistake made during development.
Example:
A developer accidentally writes:  


```javascript
 if (age>18)
```

instead of  


```javascript
 if (age>=18)
```

---

## Defect (Bug)
The flaw introduced into the software because of an error.

Example:
Users who are exactly 18 years  old cannot register.

---

## Failure
The incorrect behaviour observed when the defect is executed.

Example:
An 18-year-old user attempts to  register and recieves:

```
Registration denied.
```

### Relationship

```
Human Error
      ↓
Defect (Bug)
      ↓
Failure during execution
```

## Defect lifecycle
A typical defect passes through several stages.

```
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Closed
```

Possible alternative paths:
```
Rejected
Deferred
Duplicate
Cannot Reproduce
Reopened
```

### Example
Tester reports:
"Login button does nothing."
Developer fixes the issue.
tester verifies the fix.
Bug is closed.

---

## Test case
A test case is a documented set of conditions used to verify one specific behaviour.

Example:

| Field | Value |
|------|------|
| ID | TC-001 |
| Title | Valid Login |
| Preconditions | User exists |
| Steps | Enter username and password |
| Expected Result | Dashboard opens |

Good test cases are:
- Independent
- Repeatable
- Clear
- Easy to automate

---

## Test suite
A collection of related test cases.

Example:

Authentication Suite

- Valid Login
- Invalid Login
- Locked User
- Forgot Password
- Logout

---



## Test plan
A document describing  **how testing will be performed** for a project.

Usually includes:
- Scope
- Objectives
- Schedule
- Resources
- Risks
- Test environments
- Exit criterias



## Test strategy
A high-lecel approach that defines **how the organisation performs testing**.

It usually includes:
- Testing levels
- Automation strategy
- Tools
- Risk management
- Reporting process

Think of it like this:

```
Test Strategy
     ↓
Test Plan
     ↓
Test Cases
```


## Assertions
Assertions  verify that the actual result matches the expected result.

Example:

```javascript
expect(total).toBe(100);
```
If the assertion passes:
√ Test passes
 
If it fails:
× Test fails

Common assertions:

```javascript
expect(value).toBe()
expect(value).toEqual()
expect(array).toContain()
expect(element).toBeVisible()
expect(title).toHaveText()
```
---


## Test pyramid
The Test Pyramid describes the ideal distribution of automated tests.

```
E2E
Integration
Unit Unit Unit
```
### Unit Tests
- Fast
- Cheap
- Many

### Integration Tests
- Moderate speed 
- Verify interactions

### End-to-End Tests
- Slow 
- Expensive
- High confidence

General recommendation:
- Many unit tests
- Some integration tests
- Few end-to-end tests

---


## Shift Left Testing
Shift Left testing earlier in the development lifecycle.

Traditional approach:

```
Develop
  ↓
Test
  ↓
Release
```

Shift Left:

```
Requirements
  ↓
Testing
  ↓
Development
  ↓
Continuous Testing
```

Benefits:
- Earlier defect detection
- Lower fixing costs
- Faster releases

---

## SDLC (Software Development Life Cycle)
The SDLC describes the overall process of developing software.

```
Planning
  ↓
Requirements  
  ↓
Design
  ↓
Development
  ↓
Maintenance
```

Testing mainly occurs during the Testing phase but should also be integrated earlier through Shift Left practices.

---

# STLC (Software Testing Life Cycle)

The STLC focuses specifically on testing activities.

Typical phases:

```
Requirement Analysis
 ↓
Test Planning
 ↓
Test Case Development
 ↓
Environment Setup
 ↓
Test Execution
 ↓
Defect Reporting
 ↓
Test Closure
```

---

# CI/CD Overview

CI/CD automates building, testing, and deploying software.

## Continuous Integration (CI)

Developers frequently merge code into a shared repository.

Each commit automatically triggers:

- Build
- Unit tests
- Static analysis
- Reports

Benefits:

- Early defect detection
- Faster feedback
- Fewer merge conflicts

---

## Continuous Delivery (CD)

The application is always in a deployable state.

Deployment to production is a manual decision.

---

## Continuous Deployment

Every successful change is automatically deployed to production without manual approval.

---

Typical pipeline:

```
Developer Push
        ↓
Source Control (Git)
        ↓
CI Server
        ↓
Build
        ↓
Unit Tests
        ↓
Integration Tests
        ↓
End-to-End Tests
        ↓
Deploy
```

---

# Key Takeaways

- Testing reduces risk; it does not prove software is bug-free.
- Verification checks whether the product is built correctly; validation checks whether the right product is built.
- Errors lead to defects, and defects can cause failures.
- Assertions determine whether a test passes or fails.
- A balanced test suite follows the Test Pyramid.
- Shift Left promotes earlier testing to reduce costs and improve quality.
- SDLC covers the full software development process, while STLC focuses specifically on testing.
- CI/CD automates the build, test, and deployment pipeline to deliver software more reliably.



