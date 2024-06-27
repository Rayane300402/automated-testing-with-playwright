import { Page } from "@playwright/test";

export class AbstractPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visit(url: string) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getUrl() {
        return await this.page.url();
    }

    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}
