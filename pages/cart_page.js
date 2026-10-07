// @ts-check

export class CartPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.removeButton = page.getByRole("button", { name: "Remove" });
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
  }
}
