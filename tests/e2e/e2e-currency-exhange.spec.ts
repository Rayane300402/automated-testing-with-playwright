import {test , expect} from '@playwright/test';

test.describe('E2E Pay Bills', () => {
    test.beforeAll(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('input[type="submit"]')
    })

    test('make currency exchange', async ({page}) => {
        await page.click('#pay_bills_tab')
        await page.click('text=Purchase Foreign Currency')
        await page.selectOption('#pc_currency', 'EUR')
        expect(await page.locator('#pc_sell_rate')).toContainText('1 euro (EUR)')
        await page.fill('#pc_amount', '1000')
        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')
        expect(await page.locator('#pc_conversion_amount')).toContainText('1000.00 U.S. dollar')
        await page.click('#purchase_cash')
  
        await expect(page.locator('.alert-successful')).toHaveText('Foreign currency cash was successfully purchased.')
    })
})