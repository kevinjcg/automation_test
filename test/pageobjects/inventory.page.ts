import Page from './page';

class InventoryPage extends Page {
    get item_backpack () { return $('#add-to-cart-sauce-labs-backpack') }
    get item_bike_light () { return $('#add-to-cart-sauce-labs-bike-light') }
    get shoping_cart_link () { return $('a.shopping_cart_link') }
    get shopping_cart_badge () { return $('[class="shopping_cart_badge"]') }

    addItemsToCart() {
        this.item_backpack.click();
        this.item_bike_light.click();


    }

    goToCartForm () {
        this.shoping_cart_link.click();
    }
}

export default new InventoryPage();