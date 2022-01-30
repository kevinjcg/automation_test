import Page from './page';

class CheckoutStepOnePage extends Page {
    
    get continueButtom() { return $('[data-test="continue"]') }
    get firstNameField() { return $('#first-name') }
    get lastNameField() { return $('#last-name') }
    get postalCodeField() { return $('#postal-code') }

    getErrorElement() {
        const element = $('h3[data-test="error"]');
        return element;
    }

    setRequiredFields(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        this.firstNameField.setValue(firstName);
        this.lastNameField.setValue(lastName);
        this.postalCodeField.setValue(postalCode);
    }

    goToCheckOutOverViewForm() {
        this.continueButtom.click();
    }
}

export default new CheckoutStepOnePage();