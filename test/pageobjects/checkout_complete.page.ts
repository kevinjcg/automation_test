import Page from './page';

class CheckoutCompletePage extends Page {
    get farewellMessage() { return $('.complete-header=THANK YOU FOR YOUR ORDER') }
    
}

export default new CheckoutCompletePage();