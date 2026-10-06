// ts-check
import { test, expect } from "@playwright/test";

const url_sauce_demo = "https://www.saucedemo.com";

test("sauce_demo_landing_page", async function ({ page }) {
  await page.goto(url_sauce_demo);
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  await expect(page.locator(".login_credentials_wrap-inner")).toBeVisible();
  const is_vis = await page.getByRole("button", { name: "Login" }).isVisible();
  console.log("is vis: ", is_vis);
});

test("valid_login", async function ({ page }) {
  await page.goto(url_sauce_demo);
  page.getByTestId;
  page.getByRole("");
});
