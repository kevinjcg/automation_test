import Page from './page';

class CheckoutStepOnePage extends Page {
    
    get continueButtom() { return $('[data-test="continue"]') }
    get firstNameField() { return $('#first-name') }
    get lastNameField() { return $('#last-name') }
    get postalCodeField() { return $('#postal-code') }

    /**
     * Obtain the error element when the data in the form is not the correct
     * @returns {any} Error element
     */
    getErrorElement() {
        const element = $('h3[data-test="error"]');
        return element;
    }

    /**
     * Fill the fields in the form on checkout step one
     * @param {string} firstName Customer First name
     * @param {string} lastName Customer Last name
     * @param {string} postalCode Postal code, a five digit number
     * @returns {number} Item price
     */
    setRequiredFields(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        this.firstNameField.setValue(firstName);
        this.lastNameField.setValue(lastName);
        this.postalCodeField.setValue(postalCode);
    }

    /**
     * Click the Continue button to continue with the checkout
     */
    goToCheckOutOverViewForm() {
        this.continueButtom.click();
    }
}

export default new CheckoutStepOnePage();