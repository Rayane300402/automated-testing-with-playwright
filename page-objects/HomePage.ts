import {  Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly signInButton: Locator;
    readonly searchInput: Locator;
    readonly feedbackButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.signInButton = page.locator('#signin_button');
        this.searchInput = page.locator('#searchTerm');
        this.feedbackButton = page.locator('#feedback');
    }


    async visit(){
        await this.page.goto('http://zero.webappsecurity.com')
    }

    async clickOnSignInButton(){
        await this.signInButton.click();
    }

    async searchFor(term: string){
        await this.searchInput.fill(term);
        await this.searchInput.press('Enter');
    }

    async clickOnFeedbackButton(){
        await this.feedbackButton.click();
    }

}