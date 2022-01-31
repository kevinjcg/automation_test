import Page from './page';

class CheckoutStepTwoPage extends Page {
    get finishButtom() { return $('#finish') }
    get itemPriceOne() { return $('.inventory_item_price*=$29.99') }
    get itemPriceTwo() { return $('.inventory_item_price*=$9.99') }
    get itemSubTotal() { return $('.summary_subtotal_label') }
    get tax() { return $('.summary_tax_label') }
    get itemTotal() { return $('.summary_total_label') }

    /**
     * Returns the rounded number
     * @param {number} number Number to be rounded
     * @returns {number} Number rounded to two decimal places
     */
    getRoundedNumber(number: number): number {
        number = Math.round((number + Number.EPSILON) * 100) / 100;
        return number;
    }

    /**
     * Conver the inventory_item_price to a number value
     * @param {any} element Inventory item price element
     * @returns {number} Item price
     */
    getValue(element: any): number {
        let value = element.getText();
        let numericValue = Number(value.slice(value.indexOf('$') + 1));
        return this.getRoundedNumber(numericValue);
    }

    /**
     * Returns the sub total obtained with the sum of the two items in the cart
     * @returns {number} Sub total value
     */
    getSubTotal(): number {
        let item1 = this.getValue(this.itemPriceOne);
        let item2 = this.getValue(this.itemPriceTwo);
        return item1 + item2;
    }

    /**
     * Returns the Total obtained with the sum of the sub total and the taxes in the cart
     * @returns {number} Total value
     */
    getTotal(): number {
        let taxValue = this.getValue(this.tax);
        let subTotalValue = this.getSubTotal();
        let total = this.getRoundedNumber(taxValue + subTotalValue);
        return total;
    }

    /**
     * Click the finish button to complete the checkout
     */
    goToFinish() {
        this.finishButtom.click();
    }
}

export default new CheckoutStepTwoPage();