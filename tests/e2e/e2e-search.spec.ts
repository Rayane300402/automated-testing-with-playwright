import {test, expect} from '@playwright/test';

test.describe("Search Functionality", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
    });

    test('Search for a term', async ({page}) => {
        await page.fill('#searchTerm', 'bank')
        await page.keyboard.press('Enter')
        const numberOfLinks = await page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })

    // test('Search for a term that does not exist', async ({page}) => {
    //     await page.fill('#searchTerm', 'invalid search')
    //     await page.press('input[type="submit"]', 'Enter')
    // })
})