import {test, expect} from '@playwright/test';
import {Navbar} from '../../page-objects/components/Navbar';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';


let homePage: HomePage;
let loginPage: LoginPage;
let navbar: Navbar;

test.describe("File Transaction", () => {
    test.beforeAll(async ({page}) => {
        // await page.goto('http://zero.webappsecurity.com/index.html')
        // await page.click('#signin_button')
        // await page.fill('#user_login', 'username')
        // await page.fill('#user_password', 'password')
        // await page.click('input[type="submit"]')

        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await homePage.clickOnSignInButton()
        await loginPage.login('username', 'password')
    })

    test('Verify results for each account', async ({page}) => {
        // await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
        // await page.click("#account_activity_tab")
        await navbar.clickOnTab('Account Activity')
        await page.selectOption('#aa_accountId', '2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3)

    })
})