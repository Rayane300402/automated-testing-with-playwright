import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly submitButtonLocator: Locator;
    readonly errorMessageLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameLocator = page.locator("#user_login");
        this.passwordLocator = page.locator("#user_password");
        this.submitButtonLocator = page.locator("text=Sign in");
        this.errorMessageLocator = page.locator(".alert-error");
    }

    async visit(){
        await this.page.goto("http://zero.webappsecurity.com/");
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.submitButtonLocator.click();
    }
}