// @ts-check
import { LandingPage } from "./landing_page";
import { TopBar } from "./top_bar";
import { InventoryPage } from "./inventory_page";
import { CartPage } from "./cart_page";
import { CheckoutStep1 } from "./checkout_step1";
import { CheckoutStep2 } from "./checkout_step2";
import { CheckoutComplete } from "./checkout_complete";

export class POManager {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.landingPage = new LandingPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutStep1 = new CheckoutStep1(this.page);
    this.checkoutStep2 = new CheckoutStep2(this.page);
    this.checkoutComplete = new CheckoutComplete(this.page);
    this.topBar = new TopBar(this.page);
  }
}
