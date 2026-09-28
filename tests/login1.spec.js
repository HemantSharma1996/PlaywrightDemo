const { test, expect } = require('@playwright/test');

const testdata=JSON.parse(JSON.stringify(require("../testlogin.json")))



test.describe("Data Driven Login Test", function()
{

    for(const data of testdata)
    {

     test.describe(`Login with users ${data.id}`, function()
         {

            test('Login To Application', async ({page})  => {

                await page.goto("https://freelance-learn-automation.vercel.app/login")

   
                await page.locator("//input[@id='email1']").fill(data.username)


                await page.locator("//input[@id='password1']").fill(data.password);

                // await page.pause()

            });

        }) 

    }

})


 /*test("Working With Load State" , async ({page}) => {

    const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //await page.locator("//input[@id='email1']").fill(testdata.username)

    await page.locator("//input[@id='email1']").fill(testdata.interest[2])


    // await page.locator("//input[@id='email1']").fill(testdata.address.area)

    await page.locator("//input[@id='password1']").fill(testdata.password)

    await page.pause()

    

});

*/