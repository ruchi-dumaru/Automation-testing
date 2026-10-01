const {test,expect} =require('@playwright/test');

test('Handle dropdown',async({page})=>{
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html')

// //select multiple option from multi select dropdown
// await page.selectOption('.form-select',['One','TWO','Three'])


//Asserions
// //1) check no of options from dropdown
const options=await page.locator('.form-select option')
await expect(options).toHaveCount(4)


//2) check no of options in dropdown using js array

// const options=await page.$$('.form select option')
// // console.log(options.length)
// await expect(options.length).toBe(4)

// //3)check presence of value in the dropdown
// const content=await page.locator('.form select').textContent()

// await expect(content.includes('Two')).toBeTruthy();
// //  await expect(content.includes('Namaste')).toBeFalsy();


await page.waitForTimeout(9000)
})


// npx playwright test MultiSelectDropDown.spec.js --project=firefox --headed  