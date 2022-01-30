import Page from './page';

class CartPage extends Page {

    get checkOut () { return $('#checkout') }

    getProduct(id: string) {
        const element = $(`#${id}`);
        return element;
    }  

    goToCheckOutForm () {
        this.checkOut.click();
    }
}

export default new CartPage();