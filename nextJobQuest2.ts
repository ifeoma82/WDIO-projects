import next from "./nextJobpgobj";

describe('automating next job quest website', () => {
    it('should register user successfully',async () => {
        next.open();
        await next.getStarted.click();
        await expect(next.createAccount).toBeDisplayed();
        next.signUp('cheta','tiredtester2@mail.com','Tired@tester');
        next.signingOut;
    });


    it('registered user should sign in, edit profile and sign out successfully',async () => {
        next.open();
        next.login('tired@mail.com','Tired@tester');
        next.profileSearch;
        next.profileEdit('+15716229997','United States','Software automation tester','i am passionate about quality products');
        next.signingOut;
    });


    it('should subscribe to a one-off professional plan successfully',async () => {
        next.open();
        next.login('tired@mail.com','Tired@tester');
        next.subscribe('https://www.nextjobquest.com/pricing');
        next.payDetails('tired@mail.com','2432 4547 0891 6534','06 / 27','340','cheta tester','22202','United States');
        await expect(next.errorMessage).toHaveText('Your card number is incorrect.');
       
    })

})
