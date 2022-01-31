
export default class Page {
    
    open (path: string) {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
}
