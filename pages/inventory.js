// @ts-check

export class InventoryPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator(".shopping_cart_link");
  }
}
