**docs/TestPlan.md**

# Test Plan – Companies House Automation Assessment

## Objective

To build a maintainable and scalable Playwright-based test automation suite to validate the login functionality and booking form at [https://automationintesting.online].

## Scope

### Functional Testing

- Valid admin login with correct credentials
- Admin login failures:
  - Invalid credentials
  - Empty username
  - Empty password
  - Both fields empty
- Booking form date input and button click

### Non-Functional Testing

- Alert visibility and correctness for error messaging
- Basic accessibility for alerts and inputs
- Stability of form fields under quick typing or blank submissions

## Tools & Technologies

- Playwright (Test framework)
- TypeScript (for strongly-typed automation)
- Node.js & npm (runtime and package manager)
- GitHub (code versioning and delivery)

## Folder Structure

```
companiesHouse/
├── data/
│   └── logindata.ts
├── docs/
│   ├── BugReport.md
│   ├── Instructions.md
│   └── TestPlan.md
├── pages/
│   ├── AdminLoginPage.ts
│   └── BookingPage.ts
├── tests/
│   ├── booking.spec.ts
│   └── login.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Strategy

- Use Page Object Model to keep selectors and actions clean
- Test data separated in `/data` folder
- CI/CD ready configuration
- Descriptive test names and logical grouping with `test.describe()`

## Environments

- Chromium browser (headed/headless)

---

**docs/Instructions.md**

# Project Setup & Execution Instructions

## Requirements

- Node.js (v18 or higher)
- Git (for cloning, optional)

## How to Set Up and Run

### 1. Clone the Repo

```bash
git clone https://github.com/UmarRiaz00095/companieshouse.git
cd companieshouse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Tests

```bash
npx playwright test        # headless
npx playwright test --headed  # with browser UI
```

### 4. View the Test Report

```bash
npx playwright show-report
```

---

**docs/BugReport.md**

# Bug Report Log

## Bug #1: Error Alert Not Fully Accessible

**Summary**: The login failure alert doesn't announce itself properly to screen readers.

- **Steps to Reproduce**: Try to login with invalid credentials
- **Expected**: Alert should have ARIA live roles for screen reader support
- **Actual**: `<div class="alert alert-danger">Invalid credentials</div>` lacks accessibility roles
- **Severity**: Medium
- **Type**: Non-functional

## Bug #2: Login Proceeds on Empty Fields

**Summary**: Login allows submission when both username and password are blank

- **Steps to Reproduce**: Leave both fields empty, click Login
- **Expected**: Inline validation or disabled login button
- **Actual**: Form submits and shows alert
- **Severity**: Low
- **Type**: Functional

