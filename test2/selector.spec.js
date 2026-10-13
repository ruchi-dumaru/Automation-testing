import {test,expect} from '@playwright/test'

test('Selectors Demo',async({page})=>{
 await  page.goto('https://www.saucedemo.com/')
await page.pause()
//using obj property 
// await page.click('id=user-name')
await page.locator('id=user-name').fill('standard_user')
// await page.locator(['id=user-name']).fill('standard_user')
// await page.locator('#password').fill('secret_sauce');
await page.locator('//input[@name="password"]').fill('secret_sauce')

//using css selector
await page.locator("#login-button").click();

//using xpath
// await page.locator('//input[@name="password"]').fill('pwd')


//using text
await page.locator('text=LOGIN').click()
});

// npx playwright test todo.spec.js --project=firefox --headed