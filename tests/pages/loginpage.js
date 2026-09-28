const { expect } = require("allure-playwright")

class LoginPage 
{
    constructor(page) 
    {
        this.page = page
        this.header="//h2[normalize-space()='Sign In']"
        this.username="#email1"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton="//button[text()='Sign in']"

        // this.page = page;
        // this.username = "input[placeholder='Enter Email']";
        // this.password = "input[placeholder='Enter Password']";
        // this.loginbutton = "button:has-text('Sign in')";
    }

    async loginToApplication(user, pass) 
    {


        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
        
        // await this.page.locator(this.username).fill('admin@email.com');
        // await this.page.locator(this.password).fill('admin@123');
        // await this.page.locator(this.loginbutton).click();
        // await this.page.pause()
    }

    async verifySignIn()
    {
       await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports = LoginPage;