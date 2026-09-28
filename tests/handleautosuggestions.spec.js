const {test,expect} = require('@playwright/test')

test("Verify Application Title",async ({page}) =>{

    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").type("Playwright")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")

})

test.only("Verify Application Title Using Loop ",async ({page}) =>{

    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").type("mukesh otwani")

    await page.waitForSelector("//li[@role='presentation']")
    
    const elements=await page.$$("//li[@role='presentation']")

    for(let i=0;i<elements.length;i++)
    {
        const text=await elements[i].textContent()

        if(text.includes('playwright'))
        {
            await elements[i].click()
            break;
        }
    }

})

