import {test} from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe('Visual Regression Testing Example', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await homePage.visit();
        await homePage.clickOnSignInButton();
    });

    test('Full Page Snapshot', async ({page}) => {
        await loginPage.snapshotLoginForm();
    });

    test('Element Snapshot', async ({page}) => {
        await loginPage.login('invalid', 'invalid');
        await loginPage.snapshotErrorMessage();
    });
})