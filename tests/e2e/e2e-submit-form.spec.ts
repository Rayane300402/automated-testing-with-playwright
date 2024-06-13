import {test, expect} from '@playwright/test';

test.describe("Feedback Form", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#feedback')
    });

    // Reset feedback form
    test('Reset Feedback Form', async ({page}) => {
        await page.fill('#name', 'Name')
        await page.fill('#email', 'Email')
        await page.fill('#subject', 'Subject')
        await page.fill('#comment', 'Comment')

        await page.click('input[type="reset"]')
        await expect(page.locator('#name')).toBeEmpty()
        await expect(page.locator('#email')).toBeEmpty()
        await expect(page.locator('#subject')).toBeEmpty()
        await expect(page.locator('#comment')).toBeEmpty()
    })

    // Submit feedback form
    test('Submit Feedback Form', async ({page}) => {
        await page.fill('#name', 'Name')
        await page.fill('#email', 'Email')
        await page.fill('#subject', 'Subject')
        await page.fill('#comment', 'Comment')

        await page.click('input[type="submit"]')
        await page.waitForSelector('#feedback-title') //wait For selector is a function that waits for a selector to appear in the DOM, it is a good practice to use this function when you are waiting for a page to load, it will fail the test if the selector is not found after the timeout
    })
})