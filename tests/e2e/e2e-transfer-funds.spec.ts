import {test, expect} from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import {LoginPage} from '../../page-objects/LoginPage'; 
import { TransferFundsPage } from '../../page-objects/TransferFundsPage';
import { Navbar } from '../../page-objects/components/Navbar';

let homePage: HomePage;
let loginPage: LoginPage;
let transferFundsPage: TransferFundsPage;
let navbar: Navbar;

test.describe("Transfer Funds", () => {
    test.beforeEach(async ({page}) => {
        // await page.goto('http://zero.webappsecurity.com/index.html')
        // await page.click('#signin_button')
        // await page.fill('#user_login', 'username')
        // await page.fill('#user_password', 'password')
        // await page.click('input[type="submit"]')
        // await page.goto('http://zero.webappsecurity.com/transfer-funds.html')
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        transferFundsPage = new TransferFundsPage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await homePage.clickOnSignInButton()
        await loginPage.login('username', 'password')
        
    });

    test('Transfer Funds', async ({page}) => {
        // await page.click("#transfer_funds_tab")
        // await page.selectOption('#tf_fromAccountId', '3')
        // await page.selectOption('#tf_toAccountId', '2')
        // await page.fill('#tf_amount', '100')
        // await page.fill('#tf_description', 'Transfer')
        // await page.click('input[type="submit"]')
        // await expect(page.locator('h2.board-header')).toContainText('Verify')

        // await page.click('input[type="submit"]')
        // await expect(page.locator('.alert-success')).toContainText('You successfully submitted your transaction')
   
        await navbar.clickOnTab('Transfer Funds')
        await transferFundsPage.transferFunds('3', '2', '100', 'Transfer')
        await transferFundsPage.submitTransfer()
        await transferFundsPage.checkVerifyHeader()
        await transferFundsPage.checkSuccessMessage()

    })
})