import {test, expect} from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';

test.describe.only("Search Functionality", () => {

    let homePage: HomePage;
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        await homePage.visit()
        // await page.goto('http://zero.webappsecurity.com/index.html')
    });

    test('Search for a term', async ({page}) => {
        // await page.fill('#searchTerm', 'bank')
        // await page.keyboard.press('Enter')

        await homePage.searchFor('bank')
        

        const numberOfLinks = await page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })

    // test('Search for a term that does not exist', async ({page}) => {
    //     await page.fill('#searchTerm', 'invalid search')
    //     await page.press('input[type="submit"]', 'Enter')
    // })
})