import test, { page, expect } from "@playwright/test";

test("Assertion Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/")

  //assertions
  //check if element is present or not
  await expect(page.locator("//h1[normalize-space()='The Kitchen']")).toHaveCount(1);

  if(await page.$("//h1[normalize-space()='The Kitchen']")){
    await page.locator("//h1[normalize-space()='The Kitchen']").click()
  }


  //check element hiddeb or visible
//    await expect(page.locator("//h1[normalize-space()='The Kitchen']")).toBeVisible();
//   //  await expect.soft(page.locator("//h1[normalize-space()='The Kitchen']")).toBeHidden();

//    //check elemt enabled and disabled

// await expect(page.locator("//h1[normalize-space()='The Kitchen']")).toBeEnabled();
//   //  await expect.soft(page.locator("//h1[normalize-space()='The Kitchen']")).toBeDisabled();


//    //check text
//    await expect(page.locator("//h1[normalize-space()='The Kitchen']")).toHaveText('The kitchen');

//    await expect(page.locator("//h1[normalize-space()='The Kitchen']")).not.toHaveText('The kitchen');
 
   //check attributes value
   await expect (page.locator("//h1[normalize-space()='The Kitchen']")).toHaveAttribute('class',"chakra-heading css-dpmy2a")


     await expect (page.locator("//h1[normalize-space()='The Kitchen']")).toHaveClass(/.*chakra-heading css-dpmy2a/)

 

//check page url and title
await expect(page).toHaveURL("https://kitchen.applitools.com/")
await expect(page).toHaveTitle("The Kitchen")

  await page.pause()
//visual validate with screenshot
await expect(page).toHaveScreenshot()
});



// npx playwright test assertions.spec.js --project=firefox --headed
