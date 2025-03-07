class site {
    get myAccount(){return $('//a[@href="https://practice.automationtesting.in/my-account/"]');}
    get regEmail(){return $('//input[@id="reg_email"]');}
    get regpassword(){return $('//input[@id="reg_password"]');}
    get registerbtn(){return $('//input[@name="register"]');}
    get verifyUser(){return $('//div[@class="woocommerce-MyAccount-content"]');}
    get loginEmail(){return $('//input[@id="username"]');}
    get loginpassword(){return $('//input[@id="password"]');}
    get loginbtn(){return $('//input[@name="login"]');}
    get errorMessage(){return $('//li[text()=" An account is already registered with your email address. Please login."]');}
    get errorMessage2(){return $('//li[text()= " A user could not be found with this email address."]');}
    get lostPassword(){return $('//a[@href="https://practice.automationtesting.in/my-account/lost-password/"]');}
    get errorMessage3(){return $('//li[text()= " The password you entered for the username "]');}
    get resetPassword(){return $('//p[text()="Lost your password? Please enter your username or email address. You will receive a link to create a new password via email."]');}
    get nameField(){return $('//input[@id="user_login"]')};
    get passwordResetBtn(){return $('//input[@value="Reset Password"]')};
    get emailSent(){return $('div[text()="Password reset email has been sent."]')};

    async open(){
        browser.url('http://practice.automationtesting.in/');
        browser.maximizeWindow();
        await expect(browser).toHaveTitle('Automation Practice Site');
    }

    async register(mail:string, paswod:string){
        await this.myAccount.click();
        await this.regEmail.setValue(mail);
        await this.regpassword.setValue(paswod);
        await this.registerbtn.click();

        let register2 = await this.errorMessage.isDisplayed();
        if(register2){
            await expect(this.errorMessage).toBeDisplayed
        } else {
            await expect(this.verifyUser).toBeDisplayed();
        }
        console.log(register2);
    }

    async login(email:string, passwod:string){
        await this.myAccount.click();
        await this.loginEmail.setValue(email);
        await this.loginpassword.setValue(passwod);
        await this.loginbtn.click();
        }

    async passwordReset(){
        let mail = 'loginEmail';
        let passwod = 'loginPassword';
        if(mail = 'false' , passwod = 'true'){
            await expect(this.errorMessage2).toBeDisplayed;
        } else if(mail = 'false' , passwod = 'false'){
            await expect(this.errorMessage2).toBeDisplayed();
        } else if(mail = 'true' , passwod = 'false'){
            await expect(this.errorMessage3).toBeDisplayed();
            await this.lostPassword.click();
            await expect(this.resetPassword).toBeDisplayed();
        } else {
            await expect(this.verifyUser).toBeDisplayed(); 
        };
    }

    async submitRequest(name:string){
        await this.nameField.setValue(name);
        await this.passwordResetBtn.click();
        await expect(this.emailSent).toBeDisplayed();
    }
};

export default new site();