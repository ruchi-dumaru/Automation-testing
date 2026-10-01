
const {test,expect}= require('@playwright/test')

test('DropDown',async({page})=>{

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html')

  // await page.locator('select[name="my-select"]').selectOption({label:'One'})//label text

  await page.locator('select[name="my-select"]').selectOption('Two');//visible text


  
  await page.locator('select[name="my-select"]').selectOption({value:'3'});//using value

    await page.locator('select[name="my-select"]').selectOption({index:1});//using index


  await page.waitForTimeout(5000)
})




//  npx playwright test DropDown.spec.js --project=firefox --headed