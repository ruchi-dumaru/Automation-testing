const {test,expect} =require ('@playwright/test');

test('BuiltIn-Locators',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//for the images
const logo=await page.getByAltText('company-branding')

await expect(logo).toBeVisible();


//for placeholder

await page.getByPlaceholder('Username').fill("Admin")

await page.getByPlaceholder('Password').fill("admin123")

await page.getByRole('button',{type:'submit'}).click()

//static way to check presence of name
await expect(await page.getByText('ny user')).toBeVisible()


//dynamic way to check presence of name
const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
await expect(await page.getByText(name)).toBeVisible()
}) 


// npx playwright test Locators_builtin.spec.js --project=firefox --headed
// npx playwright test mytest.spec.js --project=firefox --headed