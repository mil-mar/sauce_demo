// @ts-check

export class CheckoutStep1 {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.zipInput = page.getByPlaceholder("Zip/Postal Code");
  }
}
