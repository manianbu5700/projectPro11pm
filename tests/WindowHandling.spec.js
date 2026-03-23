import { test, expect } from '@playwright/test'
test('WindowHandling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.locator('//input[@type="submit"]').click()

    const [newpage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQF331K6"]//descendant::h2[contains(@aria-label,"iPhone 17 Pro Max 2 TB: 17.42 cm")]')   //const arr=[12,13,14,15] const[a,b]=arr         
    ])

    await newpage.waitForLoadState()
    const title = await newpage.title()
    console.log(title)
    await newpage.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click()
    await newpage.waitForTimeout(3000)
    await newpage.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click()
    await newpage.waitForTimeout(3000)


})


//------------> //h2[text()="Results"]
//ancestor::div[@data-cel-widget="search_result_1"]
//following-sibling::div[@data-asin="B0FQF331K6"]
//descendant::h2[contains(@aria-label,"iPhone 17 Pro Max 2 TB: 17.42 cm")]

//Dynamic xpath

//ancestor
//parent
//child
//preceding-sibling
//following-sibling
//descendant

