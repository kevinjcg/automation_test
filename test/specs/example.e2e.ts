import LoginPage from  '../pageobjects/login.page';

describe('Verify Login', () => {

    
    it('Verify input are empty', () => {
        LoginPage.open('');
        
        expect(LoginPage.inputUsername.getText()).toBe('');
        expect(LoginPage.inputPassword.getText()).toBe('');
    });
});

