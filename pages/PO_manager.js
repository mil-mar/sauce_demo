// @ts-check
import { LandingPage } from "./landing_page";
import { InventoryPage } from "./inventory";

export class POManager {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.landingPage = new LandingPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
  }
}
