import {expect, Locator, Page} from '@playwright/test';

export class TransferFundsPage {
    readonly page: Page;
    readonly fromAccount: Locator;
    readonly toAccount: Locator;
    readonly amount: Locator;
    readonly description: Locator;
    readonly submitButton: Locator;
    readonly verifyHeader: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fromAccount = page.locator('#tf_fromAccountId');
        this.toAccount = page.locator('#tf_toAccountId');
        this.amount = page.locator('#tf_amount');
        this.description = page.locator('#tf_description');
        this.submitButton = page.locator('input[type="submit"]');
        this.verifyHeader = page.locator('h2.board-header');
        this.successMessage = page.locator('.alert-success');
    }

    async transferFunds(fromAccount: string, toAccount: string, amount: string, description: string) {
        await this.fromAccount.selectOption({label: fromAccount});
        await this.toAccount.selectOption({label: toAccount});
        await this.amount.fill(amount);
        await this.description.fill(description);
    }

    async submitTransfer() {
        await this.submitButton.click();
    }

    async checkVerifyHeader() {
        await expect(this.verifyHeader).toContainText('Verify');
    }

    async checkSuccessMessage() {
        await expect(this.successMessage).toContainText('You successfully submitted your transaction');
    }
}