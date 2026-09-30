const { test, expect } = require("@playwright/test");

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  //click on login button -property
  //await page.locator('id=login2').click()
  await page.click("id=login2");

  //provide username -CSS
  // await page.locator('#loginusername').fill('ruchi')
  // await page.type('#loginusername')
  await page.fill("#loginusername", "ruchidri");

  //provide password -CSS
  await page.fill('input[id="loginpassword"]', "Ruchi123#");

  //Click on login button -Xpath
  await page.click("//button[normalize-space()='Log in']");

  //verify logout link presence -CSS
  const logoutlink = await page.locator("#logout2");

  await expect(logoutlink).toBeVisible();

  await page.close();
});
