// @ts-check
import { test, expect } from "@playwright/test";
import { POManager } from "../pages/PO_manager";
require("dotenv").config();

const url_sauce_demo = "https://www.saucedemo.com";

test("sauce_demo_landing_page", async ({ page }) => {
  const poManager = new POManager(page);

  // go to landing page and verify it loads correctly (main components load)
  await page.goto(url_sauce_demo);
  await expect(poManager.landingPage.loginButton).toBeVisible();
  await expect(poManager.landingPage.usernameInput).toBeVisible();
  await expect(poManager.landingPage.passwordInput).toBeVisible();
  await expect(page.locator(".login_credentials_wrap-inner")).toBeVisible();
});

test("valid_login", async ({ page }) => {
  const poManager = new POManager(page);
  await page.goto(url_sauce_demo);

  // fill in username and password
  const username = process.env.STANDARD_USERNAME;
  const password = process.env.STANDARD_PASSWORD;

  await poManager.landingPage.usernameInput.fill(username);
  await poManager.landingPage.passwordInput.fill(password);
  await poManager.landingPage.loginButton.click();
  await expect(page.locator(".inventory_list")).toBeVisible();
  await expect(poManager.inventoryPage.cartButton).toBeVisible();
});
