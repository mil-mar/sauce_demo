// @ts-check
require("dotenv").config();

// valid username & password
const username = process.env.STANDARD_USERNAME;
const password = process.env.STANDARD_PASSWORD;

const landingPageUrl = "https://www.saucedemo.com";

export class LandingPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: /login/i });
    this.errorMessage = page.getByRole("alert");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // on landing page, log in with valid credentials
  async loggedIn() {
    await this.page.goto(landingPageUrl);
    await this.login(username, password);
  }
}
