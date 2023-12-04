const { expect } = require('@wdio/globals')
const WashingMachinesPage = require('../pageobjects/washingMachines.page')
const MachinePage = require('../pageobjects/machine.page')

async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

describe('first case', () => {
    beforeEach("before", async()=> {
        await browser.reloadSession()
        await WashingMachinesPage.open();
    })


    it('01 half screen view button filter', async () => {
        await browser.setWindowSize(1920 / 2, 1080)
        await expect(WashingMachinesPage.btnFilters.isDisplayed)
    })

    it('02 select checkbox', async () => {
        await browser.setWindowSize(1920, 1080);
        await WashingMachinesPage.setCheckbox("AEG");
    })

    it('03 check rating list', async () => {
        await browser.setWindowSize(1920, 1080);
        const ratingsList = await WashingMachinesPage.getRatingList()
        expect(WashingMachinesPage.checkRatingList(ratingsList)).toBe(true)

    })
})

describe("second case",()=>{
    beforeEach("before", async()=> {
        await browser.reloadSession()
        await WashingMachinesPage.open();
    })

    it('04 check rating list', async () => {
        await browser.setWindowSize(1920, 1080);
        const ratingsList = await WashingMachinesPage.getRatingList()
        expect(WashingMachinesPage.checkRatingList(ratingsList)).toBe(false)
    })

    it("05 compare prise",async()=>{
        const prices = await WashingMachinesPage.comparePrises();
        const oldPrice = WashingMachinesPage.correctPriceArray(prices[0]);
        let currentPrice =  WashingMachinesPage.correctPriceArray(prices[1])
        currentPrice = currentPrice.slice(0, oldPrice.length)
        expect(JSON.stringify(oldPrice) >= JSON.stringify(currentPrice)).toBe(true)

    })

    it("06 type mim price",async()=>{
        await browser.setWindowSize(1920, 1080);
        await WashingMachinesPage.inputMinPrice(1000);
        expect(await  WashingMachinesPage.btnSetBordersPrice.isClickable()).toBe(true);
    })

    it("07 check trandmark",async()=>{
        await delay(2000)
        const trandmarkArray = await WashingMachinesPage.getArreyTrademark("AEG")
        expect(trandmarkArray.length).toBeGreaterThan(0);
    })
})