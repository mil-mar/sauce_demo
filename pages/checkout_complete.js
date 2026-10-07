// @ts-check

export class CheckoutComplete {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.backHomeButton = page.getByRole("button", { name: "Back Home" });
    this.generatePDFButton = page.getByRole("button", {
      name: "Generate PDF order",
    });
    this.orderCompleteHeader = page.locator(".complete-header");
    this.titleHeader = page.locator(".title");
  }
}
