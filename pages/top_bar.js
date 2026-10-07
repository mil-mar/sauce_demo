// @ts-check

export class TopBar {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator(".shopping_cart_link");
    this.burgerMenu = page.getByRole("button", { name: "Open Menu" });
    this.burgerMenuItemList = page.locator(".bm-item-list");
    this.burgerMenuAboutButton = page.getByTestId("about-sidebar-link");
  }
}
