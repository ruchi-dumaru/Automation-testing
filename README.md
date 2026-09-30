- `https://www.demoblaze.com/`
- `https://www.nopcommerce.com/en/register` 

```
npm init playwright@latest
npm playwright -v

```
# Automate Code generation
```
npx playwright codegen (auto code generated without automatic file build in vs code)
npx playwright codegen -o test/mytest.spec.js (auto script generated which automatically build file in vs code and can run test directly)
npx playwright codegen --help
npx playwright codegen --target java
npx playwright codegen --browser chromium
npx playwright codegen --device 'iPhone 17'
npx playwright codegen --viewport -size "1280,720"
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
   - await locator.locator('locator').click()
   - await locator.click('locator');

- input box
   - await locator.Locator('locator').fill('value')
   - await locator.locator('locator').type('value')

   - await locator.fill ('locator','value')
   - await locator.type ('locator','value')


# Locate multiple web elements
- const elements=await locator.$$(locator)   
- []

# Built in Locatorslocator.getByRole() to locate by explicit and implicit accessibility attributes.
- locator.getByText() to locate by text content.
- locator.getByLabel() to locate a form control by associated label's text.
- locator.getByPlaceholder() to locate an input by placeholder.
- locator.getByAltText() to locate an element, usually image, by its text alternative.
- locator.getByTitle() to locate an element by its title attribute.
- locator.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


## Assertions
- Playwright inlcuded test assertions in the form of expect funciton.

- expect(page).toHaveURL()  Page has URL
    - expect(page).not.toHaveURL()
- expect(page).toHaveTitle()  Page has title

- expect(locator).toBeVisible() Element is visible
- expect(locator).toBeEnabled() Control is enabled
- expect(locator).toBeDisabled() Element is disabled
- expect(locator).toBeChecked() Radio/Checkbox is checked
- expect(locator).toHaveAttribute()  Element has attribute
- expect(locator).toHaveText()  Element has text
- expect(locator).toContainText()  Element contains text
- expect(locator).toHaveValue(value) Input has value
- expect(locator).toHaveCount() List of elememts has given length


# Types of Assertions 
 - Hard assertions:if it fails ,it will terminate the program
 - Soft assertions: if it fails,it will not terminate program instead it will execute remaining code

 
# Example

- | Method               | Meaning                                               |
- | -------------------- | ----------------------------------------------------- |
- | `.check()`           | Radio/checkbox **select/check** garne action          |
- | `.isChecked()`       | Current state herera **true/false return** garne      |
- | `.toBeChecked()`     | Radio/checkbox **checked cha ki chaina verify** garne |
- | `.not.toBeChecked()` | **checked chaina** bhanera verify garne               |
- | `.toBeTruthy()`      | Value truthy cha ki chaina verify                     |
- | `.toBeFalsy()`       | Value falsy cha ki chaina verify                      |
