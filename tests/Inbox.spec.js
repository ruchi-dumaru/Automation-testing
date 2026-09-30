const {test,expect}=require('@playwright/test')

test('Inbox',async({page})=>{

  await page.goto('https://automationexercise.com/login')


//Inputbox-Name
await expect (await page.locator("//input[@placeholder='Name']")).toBeVisible();
await expect(await page.locator("//input[@placeholder='Name']")).toBeEmpty();
await expect(await page.locator("//input[@placeholder='Name']")).toBeEditable();
await expect(await page.locator("//input[@placeholder='Name']")).toBeEnabled();

// await page.locator("//input[@placeholder='Name']").fill('John')
await page.fill("//input[@placeholder='Name']",'John')
await page.waitForTimeout(5000);//pause the code

})