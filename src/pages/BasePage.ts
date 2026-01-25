import { Page } from "@playwright/test";
import config from "../config/config.json";

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Enter the application URL
     */
    public async open(): Promise<void> {
        await this.page.goto(config.url);
    }
}