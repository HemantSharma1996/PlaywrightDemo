const { test, expect } = require('@playwright/test');

test("Keyboard Events In Playwright" , async ({ page }) => {

    await page.goto("https://www.google.com/")

    //await page.locator("textarea[name='q']").type("Mukesh Otwani")

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Mukesh Otwani!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for(let i=0;i<6;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

    /*await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")

    await page.keyboard.press("Control+V")
    
    */
    //await page.keyboard.press("Enter")

   

})    