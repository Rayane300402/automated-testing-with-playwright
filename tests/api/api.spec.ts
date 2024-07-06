 import {test, expect, request} from '@playwright/test';

 test.describe.parallel("API Testing", () => {
    const baseURL = 'https://reqres.in/api';

    test("Simple API Test - Assert Response Status", async ({request}) => {
        const response = await request.get(`${baseURL}/users?page=2`);
        expect(response.status()).toBe(200);
    })

    test("Simple API Test - Assert Invalid Endpoint", async ({request}) => {
        const response = await request.get(`${baseURL}/users/nonmatchingendpoint`);
        expect(response.status()).toBe(404);
    })

    test("Simple API Test - Assert Response Body", async ({request}) => {
        const response = await request.get(`${baseURL}/users?page=1`);
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
    })

    test("GET Request - Get User Details", async ({request}) => {
        const response = await request.get(`${baseURL}/users?page=1`);
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.data[0].id).toBe(1);
        expect(responseBody.data[0].email).toBeTruthy();
    })

    test("POST Request - Create New User", async ({request}) => {
        const response = await request.post(`${baseURL}/users`, {
            data:{
                id: 368,
                name: 'morpheus',
                job: 'leader'
            }
        })
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(201);
        expect(responseBody.name).toBe('morpheus');
        expect(responseBody.job).toBe('leader');
        expect(responseBody.id).toBe(368);
    })

    test("POST Request - Login", async ({request}) => {
        const response = await request.post(`${baseURL}/login`, {
            data:{
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        })
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBeTruthy();
        expect(responseBody.token).toBe('QpwL5tke4Pnpja7X4');
    })

    test("PUT Request - Update User", async ({request}) => {
        const response = await request.put(`${baseURL}/users/2`, {
            data:{
                name: 'morpheus',
                job: 'zion resident'
            }
        })
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe('morpheus');
        expect(responseBody.job).toBe('zion resident');
    })
 })