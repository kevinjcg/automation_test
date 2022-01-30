import LoginPage from  '../pageobjects/login.page';
import InventoryPage from  '../pageobjects/inventory.page';

let username = 'standard_user';
let password = 'secret_sauce';

describe('Validate Login', () => {

    it('Verify input are empty', () => {
        LoginPage.open('');
        
        expect(LoginPage.inputUsername.getText()).toBe('');
        expect(LoginPage.inputPassword.getText()).toBe('');
    });

    it('Verify that the input contains their respective values', () => {
        LoginPage.inputUsername.setValue(username);
        LoginPage.inputPassword.setValue(password);
        expect(LoginPage.inputUsername).toHaveValue(username);
        expect(LoginPage.inputPassword).toHaveValue(password);
    });

    it('Verify user was logged in successfully', () => {
        LoginPage.login(username, password);
        expect(browser).toHaveUrlContaining('/inventory.html');
    });
});

describe('Validate Inventory', () => {

    it('Verify add 2 items to your cart', () => {

        InventoryPage.addItemsToCart();
        expect(InventoryPage.shopping_cart_badge.getText()).toBe('2');
    });

    it('Verify go to your cart', () => {
        
        InventoryPage.goToCartForm();
        expect(browser).toHaveUrlContaining('/cart.html');
    });

});