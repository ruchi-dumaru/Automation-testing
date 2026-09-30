import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill('Riti12');

  await page.locator('#loginpassword').fill('Riti12');
  await page.getByRole('button', { name: 'Log in' }).click();

  const logout=await page.locator('id=logout2')

  await expect(logout).toBeVisible()
});