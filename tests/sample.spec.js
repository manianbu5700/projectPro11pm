import { test, expect } from '@playwright/test'

test("login Function", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})
