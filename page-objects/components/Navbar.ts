import {expect, Locator, Page} from '@playwright/test';

export class Navbar {
    readonly page: Page;
    readonly accountSummaryTab: Locator;
    readonly transferFundsTab: Locator;
    readonly payBillsTab: Locator;
    readonly investmentTab: Locator;
    readonly moneyAppTab: Locator;
    readonly onlineStatementsTab: Locator;

    constructor(page: Page){
        this.page = page;
        this.accountSummaryTab = page.locator('#account_summary_tab');
        this.transferFundsTab = page.locator('#transfer_funds_tab');
        this.payBillsTab = page.locator('#pay_bills_tab');
        this.investmentTab = page.locator('#money_map_tab');
        this.moneyAppTab = page.locator('#online_banking_tab');
        this.onlineStatementsTab = page.locator('#online_statements_tab');
    }

    async clickOnTab(tabName: string){
        switch(tabName){
            case 'Account Summary':
                await this.accountSummaryTab.click();
                break;
            case 'Transfer Funds':
                await this.transferFundsTab.click();
                break;
            case 'Pay Bills':
                await this.payBillsTab.click();
                break;
            case 'Investment':
                await this.investmentTab.click();
                break;
            case 'Money App':
                await this.moneyAppTab.click();
                break;
            case 'Online Statements':
                await this.onlineStatementsTab.click();
                break;
            default:
                console.log('Invalid tab name');
                break;
        }
    }

    async clickOnAccountSummaryTab(){
        await this.accountSummaryTab.click();
    }

    async clickOnTransferFundsTab(){
        await this.transferFundsTab.click();
    }

    async clickOnPayBillsTab(){
        await this.payBillsTab.click();
    }

    async clickOnInvestmentTab(){
        await this.investmentTab.click();
    }

    async clickOnMoneyAppTab(){
        await this.moneyAppTab.click();
    }


}