import { test, expect } from "@playwright/test";


test.describe('AllMy Tests',()=>{


test.beforeEach("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test("homepage", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page
    .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click();
  await page
    .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill("jacki");
  await page.locator('[data-test="lastName"]').fill("chaine");
  await page.locator('[data-test="postalCode"]').fill("0010");
  await page.locator('[data-test="continue"]').click();
});

test.afterEach("close", async ({ page }) => {
  await page.close();
});

test.only("logout", async ({ page }) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
})
//npx playwright test hook_group.spec.js --project=firefox --headed
