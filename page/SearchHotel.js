export class SearchHotel {
    constructor(page) {
        this.page = page
        this.location = page.locator('//select[@id="location"]')

    }
    async enterLocation() {
        await this.location.SelectOption({ label: "city" })
    }
}