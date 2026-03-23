export class LoginPage {
    constructor(page) {
        this.page = page
        this.uname = page.locator('//input[@id="username"]')
        this.pass = page.locator('//input[@name="password"]')
        this.button = page.locator('//input[@name="login"]')

    }
    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername(username) {
        await this.uname.fill(username)
    }
    async enterPassword(password) {
        await this.pass.fill(password)
    }
    async clickButton() {
        await this.button.click()
    }

}