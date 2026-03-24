import { test, expect } from '@playwright/test'

test("login Function", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})
test("login Function", async ({ page }) => {
    await page.goto('https://www.flipkart.in/')
    await page.waitForTimeout(3000)
})