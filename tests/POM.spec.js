const { test, expect } = require("@playwright/test");
import { LoginPage } from "../tests/pages/LoginPage";
import { HomePage } from "../tests/pages/HomePage";

import { CartPage } from "../tests/pages/CartPage";
// test('POM',async({page})=>{
// await page.goto('https://www.demoblaze.com/')

// await page.locator('#login2').click()
// await page.locator("//input[@id='loginusername']").fill("Riti12")
// await page.locator("//input[@id='loginpassword']").fill("Riti12")

// await page.getByRole('button', { name: 'Log in' }).click()

// await page.waitForTimeout(5000)
// await page.locator("#logout2").isVisible()

// await page.waitForTimeout(5000)
// })

//login

//home

//cart

test("test", async ({ page }) => {
  //login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Riti12", "Riti12");
  await page.waitForTimeout(3000);

  //Home
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page);
  const status = await cart.checkProductInCart("Nexus 6");
  await page.waitForTimeout(3000);
  expect(await status).toBe(true);
});

// npx playwright test POM.spec.js --project=firefox --headed
