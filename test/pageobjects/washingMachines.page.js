const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * page about select washing machines
 */
class WashingMachinespage extends Page {

    get btnFilters() {
        return $('.button--navy')
    }

    get ratingStarsList() {
        return $$('div.stars__rating')
    }

    get oldPrice() {
        return $$('div.goods-tile__price--old')
    }

    get currentPrice() {
        return $$('span.goods-tile__price-value');
    }

    get fieldMinPrice() {
        return $('input.slider-filter__input:nth-child(1)');
    }

    get btnSetBordersPrice() {
        return $("button.button:nth-child(4)")
    }

    get titleGoods() {
        return $$('span.goods-tile__title')
    }


    /**
     * set parament checkbox
     * @param {string} value - set type checkox
     */
    async setCheckbox(value) {
        return await $(`a[data-id="${value}"]`).click()
    }

    /**
     * get ratinglists in nymbers
     */
    async getRatingList() {
        return await this.ratingStarsList
            .map((x) => x.getAttribute('style'))
            .map((x) => Number(x.match(/\d\d/)[0]))
    }

    /**
     * 
     * @param {Array[string]} list - check array is sorted
     * @returns 
     */
    checkRatingList(list) {
        return list.every((value, index, array) => index === 0 || value >= array[index - 1]);
    }

    /**
     * get compate old and current price
     */
    async comparePrises() {
        const oldPrice = await this.oldPrice.map((x) => x.getText())

        const currentPrice = await this.currentPrice.map((x) => x.getText())
        return [oldPrice, currentPrice];
    }

    /**
     * correct array price
     */
    correctPriceArray(array) {
        return array.map((x) => x.replace(" ", ""))
            .map((x) => x.replace("₴", ""))
            .map((x) => Number(x));
    }

    /**
     * @param {number} min set min value price in field
     */
    async inputMinPrice(min) {
        await this.fieldMinPrice.setValue(min);
    }

    async getArreyTrademark(trademark) {
        return await this.titleGoods.map((x) => x.getText())
            .filter((x) => x.includes(trademark));
    }

}

module.exports = new WashingMachinespage();