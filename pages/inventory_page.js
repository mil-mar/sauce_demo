// @ts-check

export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator(".shopping_cart_link");
    this.inventoryList = page.locator(".inventory_list");
    this.inventoryItems = page.locator(".inventory_item");
  }

  async searchProductAddToCart(productName) {
    const our_item = await this.inventoryItems.filter({
      hasText: productName,
    });
    await our_item.getByRole("button", { name: "Add to cart" }).click();
  }
}
