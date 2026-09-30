const {test,expect} =require('@playwright/test')

test('Soft Assertions',async({page})=>{
await page.goto('https://www.demoblaze.com/')

await expect.soft(page).toHaveTitle('S')

await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
})

// npx playwright test SoftAssertions.spec.js --project=firefox 