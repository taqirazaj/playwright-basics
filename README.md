# Playwright

Playwright is an open-source JavaScript framework for end-to-end testing of web applications. It allows for high-level interaction with web browsers, providing a robust API for testing across multiple browsers.

## Key Features

- **Cross-Browser Testing**: Supports testing on Chromium, Firefox, and WebKit with a single API.
- **Headless Testing**: Run tests in a headless browser environment for faster execution.
- **Automatic Waiting**: Playwright automatically waits for elements to be ready before performing actions.
- **Network Interception**: Intercept and modify network requests and responses to test different scenarios.
- **Powerful Debugging**: Integrated tools for debugging, including trace viewer and visual snapshots.

## Installation

### Prerequisites

Before installing Playwright, ensure you have the following:

- **Node.js**: Playwright requires Node.js v14 or higher. [Download Node.js](https://nodejs.org/) if you haven't installed it yet.
- **Visual Studio Code**: This guide assumes you are using Visual Studio Code (VS Code) as your code editor. [Download VS Code](https://code.visualstudio.com/) if necessary.

### Install Playwright on Windows

1. **Open Visual Studio Code**: Launch VS Code on your Windows machine.

2. **Open Terminal**:
   - You can open the terminal in VS Code by navigating to `View` > `Terminal`.

3. **Navigate to Your Project Directory**:
   - Use the `cd` command to navigate to the root directory of your project:
     ```bash
     cd path\to\your\project
     ```

4. **Initialize a Node.js Project** (if not already done):
   - Run the following command to create a `package.json` file:
     ```bash
     npm init -y
     ```

5. **Install Playwright**:
   - Run the following command to install Playwright as a development dependency:
     ```bash
     npm install playwright --save-dev
     ```

6. **Install Browser Binaries**:
   - Run the following command to download the necessary browser binaries:
     ```bash
     npx playwright install
     ```

7. **Open Playwright Test Runner**:
   - You can start the Playwright Test Runner with the following command:
     ```bash
     npx playwright test
     ```

### Install Playwright on macOS

1. **Open Visual Studio Code**: Launch VS Code on your macOS machine.

2. **Open Terminal**:
   - You can open the terminal in VS Code by navigating to `View` > `Terminal`.

3. **Navigate to Your Project Directory**:
   - Use the `cd` command to navigate to the root directory of your project:
     ```bash
     cd path/to/your/project
     ```

4. **Initialize a Node.js Project** (if not already done):
   - Run the following command to create a `package.json` file:
     ```bash
     npm init -y
     ```

5. **Install Playwright**:
   - Run the following command to install Playwright as a development dependency:
     ```bash
     npm install playwright --save-dev
     ```

6. **Install Browser Binaries**:
   - Run the following command to download the necessary browser binaries:
     ```bash
     npx playwright install
     ```

7. **Open Playwright Test Runner**:
   - You can start the Playwright Test Runner with the following command:
     ```bash
     npx playwright test
     ```

## Run Your Tests

- You can run tests from the Playwright Test Runner or from the command line:
  ```bash
  npx playwright test



### Setup/Prerequisites - Playwright Testing Service

* Setup a Playwright Testing workspace

  * See: [Quickstart: Run end-to-end tests at scale with Microsoft Playwright Testing Preview](https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests)

* Create a `.env` file in the root of the project

  * See: [Set up your environment](https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests?tabs=playwrightcli#set-up-your-environment)

* Create a `playwright.config.ts` file in the root of the project

  * See: [Add a service configuration file](https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests?tabs=playwrightcli#add-a-service-configuration-file)