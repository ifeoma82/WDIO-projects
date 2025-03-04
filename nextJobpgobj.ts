class next{
    get getStarted(){return $('//button[text()="Get Started"]');}
    get createAccount(){return $('//h1[text()="Create your account"]');}
    get fullName(){return $('//input[@id="name"]');}
    get email(){return $('//input[@id="email"]');}
    get password(){return $('//input[@id="password"]');}
    get signUpButton(){return $('//button[@type="submit"]');}
    get accountCreated(){return $('//h2[text()="Your Account Has Been Created Successfully!"]');}
    get proceedBtn(){return $('//button[text()="Proceed"]');}
    get signedInIcon(){return $('//span[@class="relative inline-block"]');}
    get signOut(){return $('//div[text()="Sign out"]');}
    get homePage(){return $('//a[@class="flex items-center"]');}
    get signInBtn(){return $('//button[text()="Sign In"]');}
    get WelcomeMessage(){return $('//h1[text()="Welcome back"]');}
    get signInButton(){return $('//button[text()="Sign in"]');}
    get profile(){return $('//a[@href="/profile"]');}
    get profileSetting(){return $('//h1[text()="Profile Settings"]');}
    get editProfile(){return $('//button[text()="Edit Profile"]');}
    get emailField(){return $('//input[@id="email"]');}
    get phone(){return $('//input[@id="phone"]');}
    get location(){return $('//input[@id="location"]');}
    get title(){return $('//input[@id="title"]');}
    get bio(){return $('//textarea[@id="bio"]');}
    get saveChanges(){return $('//button[@type="submit"]');}
    get dashBoard(){return $('//a[@href="/dashboard"]');}
    get oneOffBtn(){return $('//button[text()="One-Off"]');}
    get email2(){return $('//input[@id="email"]');}
    get cardInfo(){return $('//input[@id="cardNumber"]');}
    get expiryDate(){return $('//input[@id="cardExpiry"]');}
    get cvc(){return $('//input[@id="cardCvc"]');}
    get cardHolder(){return $('//input[@id="billingName"]');}
    get zip(){return $('//input[@id="billingPostalCode"]');}
    get payButton(){return $('//div[@class="SubmitButton-IconContainer"]');}
    get checkBox(){return $('//div[@id="checkbox"]');}
    get errorMessage(){return $('//span[text()="Your card number is incorrect."]');}
    get proGetStarted(){return $('//button[@class="w-full py-3 rounded-lg mb-6 transition-colors bg-blue-600 hover:bg-blue-700 text-white"]');}
    get country(){return $('//select[@id="billingCountry"]');}
    get monthly(){return $('//button[@class="w-full py-3 rounded-lg mb-6 transition-colors bg-blue-600 hover:bg-blue-700 text-white"]')};
    get errorMesage(){return $('//div[text()="Invalid credentials"]')};
   

    async open(){
        return browser.url('https://www.nextjobquest.com/'),
        browser.maximizeWindow(),
        expect(browser).toHaveTitle('NextJobQuest');
    }

    async signUp(name:string,email:string,passwrd:string){
        await this.fullName.setValue(name);
        await this.email.setValue(email);
        await this.password.setValue(passwrd);
        await this.signUpButton.click();
        await expect(this.accountCreated).toBeDisplayed();
        await this.proceedBtn.click();
    }


    async signingOut(){
        await expect(this.signedInIcon).toBeDisplayed();
        await this.signedInIcon.click();
        await this.signOut.click();
        await expect(this.homePage).toBeDisplayed();
    }

    async login(email:string,paswrd:string){
        await this.signInBtn.click();
        await expect(this.WelcomeMessage).toBeDisplayed();
        await this.email.setValue(email);
        await this.password.setValue(paswrd);
        let secretPin = 'password'
        if(secretPin !== paswrd){
            await expect(this.errorMesage).toBeDisplayed();
        } else {
            await this.signInButton.click();
        }
        
    }

    async profileSearch(){
        await expect(this.signedInIcon).toBeDisplayed();
        await this.signedInIcon.click();
        await this.profile.click();
        await expect(this.profileSetting).toBeDisplayed();
        await this.editProfile.click();

    }

    async profileEdit(number:string,country:string,title:string,description:string){
        await expect(this.fullName).toBeDisplayed();
        await expect(this.emailField).toBeDisplayed();
        await this.phone.setValue(number);
        await this.location.setValue(country);
        await this.title.setValue(title);
        await this.bio.setValue(description);
        await this.saveChanges.click();
    }

    async subscribe(url:string){
        await this.signedInIcon.click()
        await this.dashBoard.click();
        await expect(browser).toHaveUrl(url);

        let text = "oneOffBtn";
        if (text.includes("One-Off")) {
            console.log('MONTHLY SUB');
            await this.monthly.click();
        } else {
            console.log('ONE-OFF SUB');
            await this.oneOffBtn.click();
        }
        await this.proGetStarted.click();
    }

    async payDetails(ename:string,number:string,cvc:string,dateLine:string,cardName:string,code:string,nation:string){
        await this.email2.setValue(ename);
        await this.cardInfo.setValue(number);
        await this.expiryDate.setValue(dateLine);
        await this.cvc.setValue(cvc);
        await this.cardHolder.setValue(cardName);
        await this.country.selectByVisibleText(nation);
        await this.zip.setValue(code);
        await this.payButton.click();
    }
     
}

export default new next;
