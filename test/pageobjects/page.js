const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    */
    open (url='https://bt.rozetka.com.ua/ua/washing_machines/c80124/') {
        return browser.url(`${url}`)
    }
}
