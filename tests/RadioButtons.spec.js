const {test,expect}=require('@playwright/test');


test('handle radio btn',async({page})=>{
 await page.goto('https://demoqa.com/automation-practice-form');


//  //Radio button
//  await page.locator("//input[@id='gender-radio-1']").check();
//  await expect(await page.locator("//input[@id='gender-radio-1']")).toBeChecked()
//   await expect(await page.locator("//input[@id='gender-radio-1']").isChecked()).toBeTruthy();

//   await expect(await page.locator("//input[@id='gender-radio-2']").isChecked()).toBeFalsy();

//  await page.waitForTimeout(500);


await page.locator("//input[@id='gender-radio-2']").check();
await expect(await page.locator("//input[@id='gender-radio-2']")).toBeChecked() ;
await expect (await page.locator("//input[@id='gender-radio-2']").isChecked()).toBeTruthy() ;
await expect(await page.locator("//input[@id='gender-radio-3']").isChecked()).toBeFalsy();
await expect(await page.locator("//input[@id='gender-radio-1']").isChecked()).toBeFalsy();

})

//  npx playwright test RadioButtons.spec.js --project=firefox --headed