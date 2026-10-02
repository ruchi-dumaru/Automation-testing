const {test,expect}=require('@playwright/test');

test('frames',async({page})=>{
  await page.goto('https://demoqa.com/nestedframes')

  const allframes=await page.frames()
  console.log("Number of frames:",allframes.length)


  //approach 1:using name or url

  await page.frame('')

})


// npx playwright test Frames.spec.js --project=firefox --headed
