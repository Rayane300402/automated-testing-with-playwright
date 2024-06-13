import {test, expect} from '@playwright/test';

test.describe("File Transaction", () => {
    test.beforeAll(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('input[type="submit"]')
    })

    test('VErify results for each account', async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
        await page.click("#account_activity_tab")
        await page.selectOption('#aa_accountId', '2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3)

    })
})