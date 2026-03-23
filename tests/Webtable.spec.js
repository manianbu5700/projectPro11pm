import { test, expect } from '@playwright/test'
test('Webtable', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const Rowdata = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(Rowdata)
    // await expect(Rowdata).toContain('Tiger Nixon')
    await expect(Rowdata).toEqual([
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '61',
        '2011/04/25',
        '$320,800'
    ])
    const ColumnData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    await console.log(ColumnData)
    expect(ColumnData).toContain('Jena Gaines')

    const data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    console.log(data)
    await expect(data).toEqual('San Francisco')
    
})