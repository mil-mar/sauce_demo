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
  await expect(poManager.inventoryPage.inventoryList).toBeVisible();
  await expect(poManager.inventoryPage.cartButton).toBeVisible();
});

test("invalid username", async ({ page }) => {
  const poManager = new POManager(page);
  await page.goto(url_sauce_demo);
  const password = process.env.STANDARD_PASSWORD;

  // fill in invalid username (with password correct for one of the accounts) and attempt to log in
  await poManager.landingPage.usernameInput.fill("incorrect");
  await poManager.landingPage.passwordInput.fill(password);
  await poManager.landingPage.loginButton.click();
  const errorMessage = await poManager.landingPage.errorMessage;
  expect(await errorMessage.textContent()).toContain(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

test("invalid password", async ({ page }) => {
  const poManager = new POManager(page);
  await page.goto(url_sauce_demo);
  const username = process.env.STANDARD_USERNAME;

  // fill in valid username with invalid password and attempt to log in
  await poManager.landingPage.usernameInput.fill(username);
  await poManager.landingPage.passwordInput.fill("invalidpassword");
  await poManager.landingPage.loginButton.click();
  const errorMessage = await poManager.landingPage.errorMessage;

  expect(await errorMessage.textContent()).toContain(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

test("add 1 item to cart", async ({ page }) => {
  const poManager = new POManager(page);
  const username = process.env.STANDARD_USERNAME;
  const password = process.env.STANDARD_PASSWORD;

  // go to landing page and log in
  await page.goto(url_sauce_demo);
  await poManager.landingPage.login(username, password);

  // identify our item and add it to cart
  const our_item = poManager.inventoryPage.inventoryItems.filter({
    hasText: "Sauce Labs Fleece Jacket",
  });
  await our_item.getByRole("button", { name: "Add to cart" }).click();

  // verify that item was added to cart and button for the item changed to 'Remove'
  await expect(poManager.inventoryPage.cartButton).toHaveText("1");
  await expect(our_item.getByRole("button", { name: "Remove" })).toBeVisible();
});
