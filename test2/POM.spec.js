import { test, expect } from "@playwright/test";
import {LoginPage} from "../tests/POMS.spec.js/login.spec"
import { AddToCartPage } from "./POMS.spec.js/homepage.spec";
import { LogoutPage } from "./POMS.spec.js/logout.spec";
// test.beforeEach("login", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   await page.locator('[data-test="username"]').fill("standard_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();

// });
// test("AddToCart", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   await page.locator('[data-test="username"]').fill("standard_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
//   await page
//     .locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
//     .click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').fill("Adrin");
//   await page.locator('[data-test="lastName"]').fill("Bista");
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill("1111");
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
// });
// test.afterEach('close',async({page})=>{
//   await page.close()
// })
// test.only('logout',async({page})=>{
//   await page.pause();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
// })



// test('login',async({page})=>{
//   const Login=new LoginPage(page)
//   await Login.gotoLoginPage(page);
//   await Login.login('standard_user','secret_sauce');

// })

test.only('Test POM',async({page})=>{

 // login
  const Login=new LoginPage(page)
  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');

  //addtocart
  const AddToCart= new AddToCartPage(page)
  await AddToCart.gotoAddToCartPage();
  await AddToCart.addtocart('smith','taylor','100')
  await expect(page).toHaveURL(/inventory\.html/);

  //logout
  const Logout=new LogoutPage(page);
  await Logout.logout();
})


//npx playwright test POM.spec.js --project=firefox --headed