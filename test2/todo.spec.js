
//npx playwright codegen
//npx playwright test --ui
// npx playwright show-trace trace.zip
//npx playwright test --debug
//npx playwright test --trace on

import { test, expect } from '@playwright/test';

test('todo', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('reading books');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('traveling paris');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('buying bullet bike');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('eating at 5star resturant');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'eating at 5star resturant' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'reading books' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByText('eating at 5star resturant')).toBeVisible();
  await expect(page.getByText('reading books')).toBeVisible();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('traveling paris')).toBeVisible();
  await expect(page.getByText('buying bullet bike')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('traveling paris');
  await expect(page.getByTestId('todo-list')).toContainText('buying bullet bike');
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Delete todo' }).click();
  await page.getByRole('button', { name: 'Delete todo' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(2);
  await page.close();
});

// npx playwright test todo.spec.js --project=firefox --headed