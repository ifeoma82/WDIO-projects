 import site from "../pageobjects/practicePageObj";

describe ('automating Automation Practice Site', ()=>{
    it('should register user successfully', async ()=>{
        site.open();
        site.register('tiredmeo@mail.com','Tired@tester');
    })


    it('should login user successfully', async ()=>{
        site.open();
        site.login('tired@mail.com', 'Tired@tester');
        await site.verifyUser.isDisplayed();
    })


    it('should reset password successfully', async ()=>{
        site.open();
        site.login('tired@yahoo.com', '234tired@tester');
// correct email but wrong password
        site.passwordReset;
        site.submitRequest('tired@yahoo.com');
    })
})