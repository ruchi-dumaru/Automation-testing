const { test, expect } = require("@playwright/test");

test("DropDown", async ({ page }) => {
  await page.goto("https://www.selenium.dev/selenium/web/web-form.html");

  // // await page.locator('select[name="my-select"]').selectOption({label:'One'})//label text

  // await page.locator('select[name="my-select"]').selectOption('Two');//visible text

  // await page.locator('select[name="my-select"]').selectOption({value:'3'});//using value

  //   await page.locator('select[name="my-select"]').selectOption({index:1});//using index

  // await page.waitForSelector('select[name="my-select"]','One')//by text

  //Assertions
  //1)check number of options in dropdown-Approach1

  // const options=await page.locator('.form-select  option')
  // await expect(options).toHaveCount(4)

  //2)check number of options in dropdown-Approach2

  const options = await page.$$(".form-select  option");
  // console.log('Numbers of options:',options.length)
  await expect(options.length).toBe(4);

  // //3)Check presence of value or options name in dropdown-Approach1
  // const content = await page.locator(".form-select").textContent();
  // await expect(content.includes("One")).toBeTruthy();

  //4)check presence of value in the dropdown-approcach2 -using looping
  // const optionss = await page.$$(".form-select option");
  // let status = false;

  // for (const option of optionss) {
  //   let value = await option.textContent();
  //   if (value.includes("Three")) {
  //     status = true;
  //     break;
  //   }
  // }
  // expect(status).toBeTruthy();

  //4)select options from dropdown using loop
  const optionss = await page.$$(".form-select option");

  for (const option of optionss) {
    let value = await option.textContent();
    if (value.includes("Three")) {
      await page.selectOption(".form-select", value);
      break;
    }
  }

  await page.waitForTimeout(2000);
});

//  npx playwright test DropDown.spec.js --project=firefox --headed
