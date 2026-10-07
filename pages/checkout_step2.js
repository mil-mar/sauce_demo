// @ts-check

export class CheckoutStep2 {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
  }
}
