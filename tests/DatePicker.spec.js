const {test,expect}=require('@playwright/test');


test('Date Picker',async({page})=>{
  await page.goto('https://demoqa.com/automation-practice-form')

  // await page.locator('#dateOfBirthInput').fill('01 Sep 2026')



  //date
  //month
  //year
const date='01'
const monthYear= 'Nov 2026'

await page.locator('#dateOfBirthInput').click()

while(true){
  const month_year=await page.locator('h2.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown:visible').textContent()

  if(monthYear==month_year){
    break;
  }

  await page.locator('span:has-text("Next Month")').click() //Next

}

const dates=await page.$$('div.react-datepicker__month')

//date selection using loop
for(const dt of dates){
  if(await dt.textContent()==date){
    await dt.click();
    break;
  }
}
  await page.waitForTimeout(8000)
})

///  npx playwright test DatePicker.spec.js --project=firefox --headed
