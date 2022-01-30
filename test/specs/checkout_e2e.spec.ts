import LoginPage from  '../pageobjects/login.page';
import InventoryPage from  '../pageobjects/inventory.page';
import CartPage from  '../pageobjects/cart.page';
import CheckoutStepOnePage from  '../pageobjects/checkout_step_one.page';

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

describe('Validate that 2 products are in the “Your Cart” form', () => {
    
    it('Verify that the two items exists in the Cart', () => {

        expect(CartPage.getProduct('remove-sauce-labs-backpack')).toExist();
        expect(CartPage.getProduct('remove-sauce-labs-bike-light')).toExist();
    });

    it('Verify go to Checkout Form', () => {

        CartPage.goToCheckOutForm();
        expect(browser).toHaveUrlContaining('/checkout-step-one.html');
    });
});

describe('Validate that required fields in the checkout form', () => {

    it('Verifiy the required fields', () => {

        CheckoutStepOnePage.goToCheckOutOverViewForm();
        expect(CheckoutStepOnePage.getErrorElement()).toExist();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('Verify go to the next step', () => {

        CheckoutStepOnePage.setRequiredFields('Kevin', 'Calero', '70511');
        CheckoutStepOnePage.goToCheckOutOverViewForm();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html');
    });
});