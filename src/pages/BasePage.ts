import { Page } from "@playwright/test";

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Enter the application URL
     */
    public async open(): Promise<void> {
        await this.page.goto("https://www.shoppersstack.com/user-signin");
    }
}