import {test, expect} from '@playwright/test';

test.describe("Login / Logout Flow" , () => {
    // before hook

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
    });

    // negative scenario
    test('Negative Scenario', async ({page}) => {
        // go to login page
        await page.click('#signin_button')
        // fill the form
        await page.fill('#user_login', 'invalid')
        await page.fill('#user_password', 'invalid')
        // click on submit
        await page.click('text=Sign in')
        // verify error message
        const error = await page.locator('.alert-error')
        await expect(error).toContainText('Login and/or password are wrong.')
    })

    // positive scebario + logout
    test('Positive Scenario', async ({page}) => {
        // go to login page
        await page.click('#signin_button')
        // fill the form
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        // click on submit
        await page.click('text=Sign in')
        await page.goto('http://zero.webappsecurity.com/transfer-funds.html')
        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible()

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
        
    })
})