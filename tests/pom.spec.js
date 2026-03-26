import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel'
test('Implement pom', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.visitUrl()
    await loginpage.enterUsername('Manianbu5700')
    await loginpage.enterPassword('Mani')
    await loginpage.clickButton()
    const searchHotel = new SearchHotel(page)
})