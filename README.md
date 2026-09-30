```
npm init playwright@latest
npm playwright -v

```
# Automate Code generation
```
npx playwright codegen (auto code generated without automatic file build in vs code)
npx playwright codegen -o test/mytest.spec.js (auto script generated which automatically build file in vs code and can run test directly)
npx playwright codegen --help
```

## Commands 
- (Note that by default the playwright run the test in headless mode)

- npx playwright test 
   - (It run the test)
- npx playwright show-report
   - (It show the readymade report)
- npx playwright test HomePageTest.spec.js
   - (It only run the test for mentioned file)   
- npx playwright test HomePageTest.spec.js --project=firefox
   - (It run the test only on the firefox browser) 
- npx playwright test HomePageTest.spec.js --headed
   - (It run the test showing the test caes run on web browser)
- npx playwright test HomePageTest.spec.js --headed --debuy
   - (It run the test step by step one at the time , one will know how the test is running ,in which line test get fail if code get crashed )


## Locating specific and multiple Elements in Playwright
- Locator are ways to find elements at any moments
- Locator use property,css and xpath

# Locate single  element
- link.button
   - await page.locator('locator').click()
   - await page.click('locator');

- input box
   - await page.Locator('locator').fill('value')
   - await page.locator('locator').type('value')

   - await page.fill ('locator','value')
   - await page.type ('locator','value')


# Locate multiple web elements
- const elements=await page.$$(locator)   
- []

# Built in Locatorspage.getByRole() to locate by explicit and implicit accessibility attributes.
- page.getByText() to locate by text content.
- page.getByLabel() to locate a form control by associated label's text.
- page.getByPlaceholder() to locate an input by placeholder.
- page.getByAltText() to locate an element, usually image, by its text alternative.
- page.getByTitle() to locate an element by its title attribute.
- page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

