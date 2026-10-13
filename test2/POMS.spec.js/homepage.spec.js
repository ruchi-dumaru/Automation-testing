exports.AddToCartPage = class AddToCartPage {
  constructor(page) {
    this.page=page;
    this.product1=page.locator('#add-to-cart-sauce-labs-backpack');
    this.product2=page.locator('#add-to-cart-sauce-labs-bike-light')
    this.product3=page.getByRole('button', { name: 'Add to cart' });
    this.cartBtn=page.locator('[data-test="shopping-cart-link"]');
    this.checkoutbtn=page.locator('[data-test="checkout"]');
    this.firstName_input=page.locator('[data-test="firstName"]');
    this.lastName_input=page.locator('[data-test="lastName"]');
    this.postalCode_input=page.locator('[data-test="postalCode"]');
    this.continueBtn=page.locator('[data-test="continue"]');
    this.finishBtn=page.locator('[data-test="finish"]');
    this.backBtn=page.locator('[data-test="back-to-products"]');
  }

  async gotoAddToCartPage() {
    await this.page.waitForURL('**/inventory.html');
  }
  async addtocart(firstName,lastName,postalCode){
    await this.product1.click();
    await this.product2.click();
    await this.cartBtn.click();
    await this.checkoutbtn.click();
    await this.firstName_input.fill(firstName);
    await this.lastName_input.fill(lastName);
    await this.postalCode_input.fill(postalCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
    await this.backBtn.click();
  }
}