const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * page on one machine
 */

class Machine extends Page {
    get btnBuy(){
        return $('.button--green');
    }

    get image(){
        return $('img[src$="354787379.jpg"]');
    }

    /**
     * overwrite specific options to adapt it to page object
    */
    open() {
        return super.open('https://bt.rozetka.com.ua/ua/aeg-7332543747788/p350220753/');
    }

    async getbtnBuyColor(){
        return await this.btnBuy.getCSSProperty('color');
    }

    async getSizebtnBuy(){
        return await this.btnBuy.getSize();
    }
}

module.exports = new Machine();