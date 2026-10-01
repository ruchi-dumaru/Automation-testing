const { test, expect } = require("@playwright/test");

test("Checkboxes", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  //single checkbox
  // await page.check('//input[@id="hobbies-checkbox-1" and @type="checkbox"]');

  await page
    .locator('//input[@id="hobbies-checkbox-1" and @type="checkbox"]')
    .check();

  expect(
    await page.locator(
      '//input[@id="hobbies-checkbox-1" and @type="checkbox"]',
    ),
  ).toBeChecked();

  expect(
    await page
      .locator('//input[@id="hobbies-checkbox-1" and @type="checkbox"]')
      .isChecked(),
  ).toBeTruthy();

  expect(
    await page
      .locator('//input[@id="hobbies-checkbox-3" and @type="checkbox"]')
      .isChecked(),
  ).toBeFalsy();

  //input[@id='hobbies-checkbox-3"]

  //input[@id="hobbies-checkbox-1" and @type="checkbox"]

  //Multiple checkboxes
  const checkboxesLocator = [
    '//input[@id="hobbies-checkbox-1" and @type="checkbox"]',
    '//input[@id="hobbies-checkbox-2" and @type="checkbox"]'  
  ];

  //select multiple checkboxes
  for (const Locator of checkboxesLocator) {
    await page.locator(Locator).check();
  }
 await page.waitForTimeout(5000);
 
  //uncheck multiple checkboxes
  for (const Locator of checkboxesLocator) {
    if (await page.locator(Locator).isChecked()) {
      await page.locator(Locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});

//  npx playwright test Checkbox.spec.js --project=firefox --headed
