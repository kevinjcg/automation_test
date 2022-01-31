import LoginPage from  '../pageobjects/login.page';
import InventoryPage from  '../pageobjects/inventory.page';
import CartPage from  '../pageobjects/cart.page';
import CheckoutStepOnePage from  '../pageobjects/checkout_step_one.page';
import CheckoutStepTwoPage from  '../pageobjects/checkout_step_two.page';
import CheckoutCompletePage from  '../pageobjects/checkout_complete.page';

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
    });

    it('Verify go to the next step', () => {

        CheckoutStepOnePage.setRequiredFields('Kevin', 'Calero', '70511');
        CheckoutStepOnePage.goToCheckOutOverViewForm();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html');
    });
});

describe('Validate the sum of the item total', () => {

    it('Sub total should be equal to 39.98', () => {
        expect(CheckoutStepTwoPage.getSubTotal()).toBe(39.98);
        expect(CheckoutStepTwoPage.itemSubTotal).toHaveTextContaining('Item total: $39.98');
    });

    it('Total should be equal to 43.18', () => {
        expect(CheckoutStepTwoPage.getTotal()).toBe(43.18);
        expect(CheckoutStepTwoPage.itemTotal).toHaveTextContaining('Total: $43.18');
    });

    it('should move to the final step', () => {
        CheckoutStepTwoPage.goToFinish();
        expect(browser).toHaveUrlContaining('/checkout-complete.html');
    });
});

describe('Validate that “THANK YOU FOR YOUR ORDER” is displayed', () => {
    it('farewell message should be displayed', () => {
        expect(CheckoutCompletePage.farewellMessage).toBeDisplayed();
        expect(CheckoutCompletePage.farewellMessage.getText()).toBe('THANK YOU FOR YOUR ORDER');
    });
});