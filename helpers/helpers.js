// @ts-check
import { POManager } from "../pages/PO_manager";

/**
 * @param {import('@playwright/test').Page} page
 */
export async function completeCheckout(page) {
  const poManager = new POManager(page);
  await poManager.topBar.cartButton.click();
  await poManager.cartPage.checkoutButton.click();
  await poManager.checkoutStep1.firstNameInput.fill("John");
  await poManager.checkoutStep1.lastNameInput.fill("Doe");
  await poManager.checkoutStep1.zipInput.fill("12345");
  await poManager.checkoutStep1.continueButton.click();
  await poManager.checkoutStep2.finishButton.click();
}

// export { completeCheckout };
