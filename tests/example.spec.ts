import {test, expect} from '@playwright/test';
import { loadHomepage, assertTitle } from '../helpers';

test("simple basic test", async({page}) => {
    await page.goto("https://www.example.com")
    const pageTote = await page.locator("h1")
    await expect(pageTote).toContainText("Example Domain")
})


// test("Clickin on Elements", async({page}) => {
//     await page.goto("http://zero.webappsecurity.com/index.html")
//     await page.click("#signin_button")
//     await page.click("text=Sign in")
//     const errorMessage = await page.locator(".alert-error")
//     await expect(errorMessage).toContainText("Login and/or password are wrong.")
// })


// test("Fill in the form", async({page}) => {
//     await page.goto("http://zero.webappsecurity.com/index.html")
//     await page.click("#signin_button")
//     await page.fill("#user_login", "username")
//     await page.fill("#user_password", "password")
//     await page.click("text=Sign in")
//     const errorMessage = await page.locator(".alert-error")
//     await expect(errorMessage).toContainText("Login and/or password are wrong.")
// })

// test("assertion testing", async({page}) => {
//     await page.goto("https://www.example.com")
//     await expect(page).toHaveURL("https://www.example.com")
//     await expect(page).toHaveTitle("Example Domain")
//     await expect(page.locator("h1")).toBeVisible()
//     await expect(page.locator("h1")).toHaveText("Example Domain")
//     await expect(page.locator("h1")).toHaveCount(1)
//     await expect(page.locator("h2")).not.toBeVisible()
    
// })

test.describe("Test Suite", () => {
     
    test("Clickin on Elements", async({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.click("text=Sign in")
        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.")
    })

    
    test("assertion testing @test", async({page}) => {
        await page.goto("https://www.example.com")
        await expect(page).toHaveURL("https://www.example.com")
        await expect(page).toHaveTitle("Example Domain")
        await expect(page.locator("h1")).toBeVisible()
        await expect(page.locator("h1")).toHaveText("Example Domain")
        await expect(page.locator("h1")).toHaveCount(1)
        await expect(page.locator("h2")).not.toBeVisible()
        
    })
})

test.describe.parallel.only("Hooks", () => {
    // test.beforeAll(async({page}) => {}) //before all tests start running
    test.beforeEach(async({page}) => {
        await page.goto("https://www.example.com")
    }) //before each test

    // test.afterAll(async({page}) => {}) //after all tests are done
    // test.afterEach(async({page}) => {}) //after each test

    test("screenshot", async ({page}) => {
        //1. load ewebsite
        // await page.goto("https://www.example.com")
        //2. take full page screenshot
        await page.screenshot({path: "screenshot.png", fullPage: true})
    })
    
    test("single element screenshot", async ({page}) => {
        //1. load ewebsite
        // await page.goto("https://www.example.com")
        //2. take h1 screenshot
        const h1 = await page.locator("h1") 
        // or
        // const h1 = await page.$("h1")
        await h1.screenshot({path: "h12.png"})
    })
    
})

test("Custom Helpers", async ({page}) => {
    await loadHomepage(page)
    // await page.pause() //pause the test
    await assertTitle(page)
})