const { test, expect } = require("@playwright/test");

test.skip("Alert", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  //..Enabling alert handling//diaglog window handler
  page.on("diaglog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("You clicked a button");
    await dialog.accept();
  });

  await page.click('#alertButton')
  await page.waitForTimeout(5000)
});

test.skip("Confirmation Dialog-Alert with OK and Cancel", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  //..Enabling alert handling//diaglog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Do you confirm action?");
    await dialog.accept();//close by using ok btn
    //  await dialog.dismiss();//close by using cancel btn

  });

  await page.click('#confirmButton')
  await expect(page.locator('#confirmResult')).toHaveText('You selected Ok')
  // await page.waitForTimeout(5000)
});

test("Prompt Dialog", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  //..Enabling alert handling//diaglog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name");
    // expect(dialog.defaultValue()).toContain('Avi')

    await dialog.accept("Avi"); //close by using ok btn
  });

  await page.click("//button[@id='promtButton']");
  await expect(page.locator("#promptResult")).toHaveText("You entered Avi");
  // await page.waitForTimeout(5000)
});

//  npx playwright test Alerts.spec.js --project=firefox --headed
