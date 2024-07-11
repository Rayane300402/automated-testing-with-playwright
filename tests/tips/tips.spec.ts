import {test,expect} from '@playwright/test';

test.describe.only("Tips and tricks Section", () => {
    test("Test Info Object", async ({page}, testInfo) => {
        await page.goto("https://www.example.com")
        console.log(testInfo)
        console.log(testInfo.title)
        console.log(testInfo.expectedStatus)
    })

    test("Test Skip Browser", async ({page, browserName}) => {
        test.skip(browserName === 'chromium', 'Skip this test on chromium')
        await page.goto("https://www.example.com")
    })


    test("Test FixMe Annotation", async ({page, browserName}) => {
        test.fixme(browserName === 'chromium', 'Test is not stable, needs revision')
        await page.goto("https://www.example.com")
    })

    test("Retries", async ({page}) => {
        await page.goto("https//www.example.com")

    })
})