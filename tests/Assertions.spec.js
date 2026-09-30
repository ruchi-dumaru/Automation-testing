const {test,expect}=require ('@playwright/test')

test('AssertionTest',async({page})=>{

//open app url
await page.goto('https://www.nopcommerce.com/en/register')


//1) expect(page).toHaveURL()
await expect(page).toHaveURL('https://www.nopcommerce.com/en/register')

//2) expect(page).toHaveTitle()
await expect(page).toHaveTitle('Register - nopCommerce')

//3) expect(page).toBeVisible()
const logo= page.locator('.desktop-logo')
await expect(logo).toBeVisible()

// 4) expect(locator).toBeEnabled() Control is enabled

const RegisterBtn=await page.locator('#register-button')
expect(RegisterBtn).toBeEnabled()


// 5) expect(locator).toBeDisabled() Element is disabled

// 6) expect(locator).toBeChecked() Checkbox is checked

// const checkBtn = await page.locator('#Newsletter')
const checkBtn = await page.getByLabel('I would like to receive newsletters:')
 await expect(checkBtn).toBeChecked()

 // 6) expect(locator).toBeChecked() Radio btn is checked
//  const FemaleRadioBtn =await page.locator('#gender-female')
//  await FemaleRadioBtn.click()//select radio button
//  await expect(FemaleRadioBtn).toBeChecked();


 //7)expect(locator).toHaveAttribute()  Element has attribute
 const regBtn=await page.locator('#register-button')

 await expect(regBtn).toHaveAttribute('type','submit') 

 //8)expect(locator).toHaveText() elem match text
 const Register=await page.locator('#register-button')
await expect(Register).toHaveText('Register')//full

 //9)expect(locator).toContainText() elem contains text
 await expect(await page.locator('#register-button')).toContainText('Reg')//partial


// 10)expect(locator).toHaveValue(value) Input has value
const firstNameInput=await page.locator('#FirstName')
await firstNameInput.fill('tester')
await expect(firstNameInput).toHaveValue('tester')


//11)expect(locator).toHaveCount() List of elememts has given length
//count how many option are there in dropdown
const countrySelector=await page.locator('select[name="CountryId"] option')
await expect(countrySelector).toHaveCount(238)

const activityOption =await page.locator('select[name="Details.CompanyRoleId"] option')
await expect(activityOption).toHaveCount(4)
})
//  npx playwright test Assertions.spec.js --project=firefox