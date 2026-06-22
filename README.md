# 🎭 Playwright + TypeScript Automation Framework for TopKlik

[![Playwright Tests](https://github.com)](https://github.com)
![TypeScript](https://shields.io)
![Playwright](https://shields.io)

A production-ready test automation framework built to validate the core features, custom product configuration engines, and end-to-end checkout business logic of the TopKlik application.

## 🛠 Tech Stack & Architecture

- **Language:** TypeScript (100%)
- **Testing Framework:** Playwright (Test Runner & Locators)
- **Design Pattern:** Page Object Model (POM) for maximum reusability and scalability
- **CI/CD:** GitHub Actions for continuous quality gates and test run triggers
- **Reporting:** Playwright HTML Reports stored as job artifacts

## 🏗 Key Framework Features

- **Page Object Model (POM):** Decoupled technical locators and interaction layers (`pages/`) from business scenarios (`tests/`).
- **Global Auth Setup Optimization:** Configured a secure authorization mechanism that performs login activities once per test run, maintaining state across concurrent browser context operations to dramatically accelerate execution.
- **Enterprise-Level Selectors:** Utilized strict, resilient locators (`getByTestId`, chaining syntax) preventing strict mode violations in modern dynamic frontends.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   cd topklik-auto
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests
- **Run all tests (Headless):** `npx playwright test`
- **Run a specific test file:** `npx playwright test tests/e2e-order.spec.ts`
- **Run tests in UI mode:** `npx playwright test --ui`
- **Run tests in Headed mode:** `npx playwright test --headed`
