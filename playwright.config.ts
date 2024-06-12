import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000, //it's basically for the timeout of the test which is 60 seconds in this case because it's in milliseconds , the purpose of it is to make sure that the test doesn't run forever
    retries: 0, //this is for the retries of the test, if the test fails, it will retry it n times, could be useful if the test fails because of the network or the server
    use: { // for browser specific options
        headless: false, //this is for the headless mode of the browser, if it's true, the browser will run in the background, if it's false, the browser will run in the foreground
        viewport: { width: 1920, height: 1080 }, //this is for the size of the browser window, it's in pixels
        actionTimeout:15000, // timeout for all playout functions like click and fill
        ignoreHTTPSErrors: true, //this is for ignoring the HTTPS errors, if it's true, the browser will ignore the HTTPS errors, if it's false, the browser will not ignore the HTTPS errors
        // channel: 'chrome' //this is for the browser channel, it could be chrome, firefox, webkit, etc.
        video: "off", //this is for the video recording of the test, if it's on, the test will be recorded, if it's off, the test will not be recorded
        screenshot: "off", //this is for the screenshots of the test, if it's on, the screenshots will be taken, if it's off, the screenshots will not be taken
    }, 

    projects: [
        {
            name: "Chrome",
            use: { 
                browserName: "chromium",
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "Firefox",
            use: { 
                browserName: "firefox",
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "Webkit",
            use: { 
                browserName: "webkit",
                viewport: { width: 1920, height: 1080 },
            },
        },
    ]
}

export default config; //this is for exporting the config object