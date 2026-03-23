import { test } from '@playwright/test'
test('DropDown Handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    const fruits = await page.locator('//select[@id="fruits"]')
    await fruits.selectOption({ index: 2 })
    const singleDropDown = await fruits.locator('option:checked').textContent()
    console.log(singleDropDown)

    const superheros = await page.locator('//select[@id="superheros"]')
    await superheros.selectOption([{ label: "Aquaman" }, { value: "ca" }, { index: 5 }])
    const MultiDropDown = await superheros.locator('option:checked').allTextContents()
    console.log(MultiDropDown)
})

//DropDown
//Taking values from dropdown
//index---------->{index:2}
//value---------->{value="0"}
//label---------->{label:"Mango"}