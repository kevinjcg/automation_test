import Page from './page';

class CheckoutStepTwoPage extends Page {
    get finishButtom() { return $('#finish') }
    get itemPriceOne() { return $('.inventory_item_price=$29.99') }
    get itemPriceTwo() { return $('.inventory_item_price=$7.99') }
    get itemSubTotal() { return $('.summary_subtotal_label=Item total: $37.98') }
    get tax() { return $('.summary_tax_label=Tax: $3.04') }
    get itemTotal() { return $('.summary_total_label=Total: $41.02') }

    getValue(element: any): number {
        let value = element.getText();
        value = value.slice(value.indexOf('$') + 1);
        let numericValue = Number(value);
        numericValue = Math.round((numericValue + Number.EPSILON) * 100) / 100;
        return numericValue;
    }

    getSubTotal(): number {
        let item1 = this.getValue(this.itemPriceOne);
        let item2 = this.getValue(this.itemPriceTwo);
        return item1 + item2;
    }

    getTotal(): number {
        let taxValue = this.getValue(this.tax);
        let subTotalValue = this.getSubTotal();
        let total = Math.round(((taxValue + subTotalValue) + Number.EPSILON) * 100) / 100
        return total;
    }

    goToFinish() {
        this.finishButtom.click();
    }
}

export default new CheckoutStepTwoPage();