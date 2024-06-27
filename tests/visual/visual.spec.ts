import { expect, test } from "@playwright/test";

test.describe.only("Visual Regression Testing Example", () => {
    test("Full Page Snapshot", async ({ page }) => {
        await page.goto("https://example.com");
        expect(await page.screenshot()).toMatchSnapshot("screenshot.png");
    });

    test("Element Snapshot", async ({ page }) => {
        await page.goto("https://example.com");
        const element = await page.$("h1");
        expect(await element?.screenshot()).toMatchSnapshot("element.png");
    })

})
// to update the snapshots, run the following command: 
// npx playwright test tests/visual/visual.spec.ts --update-snapshots