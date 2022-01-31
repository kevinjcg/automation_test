import Page from './page';

 class LoginPage extends Page {
    
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }

    /**
     * Fill the login form and click the submit button
     * @param {string} username User name
     * @param {string} password Password
     */
    login (username: string, password: string) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    /**
     * Redirect to a specific url
     * @param {string} path Site to go
     */
    open (path: string) {
        return super.open(path);
    }
}

export default new LoginPage();