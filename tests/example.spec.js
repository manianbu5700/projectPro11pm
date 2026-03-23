
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator('//input[@id="username"]').fill('student')
  await page.locator('//input[@name="password"]').fill('Password123')
  await page.locator('//button[text()="Submit"]').click()

});

//Locators
//xpath
//id----------->//input[@id="username"]
//name--------->//input[@name="username"]
//class-------->//input[@class="username"]
//Attribute and values------->//input[@type="text"]
//text-------------------->//button[text()="Submit"]