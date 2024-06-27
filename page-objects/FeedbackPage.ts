import {expect, Locator, Page} from '@playwright/test';

export class FeedbackPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly commentInput: Locator;
    readonly submitButton: Locator;
    readonly resetButton: Locator;
    readonly feedbackTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.subjectInput = page.locator('#subject');
        this.commentInput = page.locator('#comment');
        this.submitButton = page.locator('input[type="submit"]');
        this.resetButton = page.locator('input[type="reset"]');
        this.feedbackTitle = page.locator('#feedback-title');
    }


    async fillFeedbackForm(name: string, email: string, subject: string, comment: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.commentInput.fill(comment);
    }

    async submitFeedbackForm() {
        await this.submitButton.click();
    }

    async resetFeedbackForm() {
        await this.resetButton.click();
    }

    async checkEmptyFields() {
        await expect(this.nameInput).toBeEmpty();
        await expect(this.emailInput).toBeEmpty();
        await expect(this.subjectInput).toBeEmpty();
        await expect(this.commentInput).toBeEmpty();
    }

    async checkFeedbackTitle() {
        await expect(this.feedbackTitle).toBeVisible();
    }
}