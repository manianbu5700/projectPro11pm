import { test } from '@playwright/test'
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('abc')
    await page.locator('(//a[@class="analystic"])[2]').click()
    const OuterFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const InnerFrame = await OuterFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await InnerFrame.locator('//input[@type="text"]').fill('abc')
})