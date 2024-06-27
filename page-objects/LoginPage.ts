import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
export class LoginPage extends AbstractPage {
    // readonly page: Page;
    readonly usernameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly submitButtonLocator: Locator;
    readonly errorMessageLocator: Locator;
    readonly loginFormLocator: Locator;

    constructor(page: Page) {
        // this.page = page;
        super(page);
        this.usernameLocator = page.locator("#user_login");
        this.passwordLocator = page.locator("#user_password");
        this.submitButtonLocator = page.locator("text=Sign in");
        this.errorMessageLocator = page.locator(".alert-error");
        this.loginFormLocator = page.locator("#login_form");
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.submitButtonLocator.click();
    }

    async assertErrorMessage(message: string) {
        const error = await this.errorMessageLocator;
        await expect(error).toContainText(message);
    }


    async snapshotLoginForm() {
        expect(await this.loginFormLocator.screenshot()).toMatchSnapshot("login-form.png");
    }

    async snapshotErrorMessage() {
        expect(await this.errorMessageLocator.screenshot()).toMatchSnapshot("error-message.png");
    }
}