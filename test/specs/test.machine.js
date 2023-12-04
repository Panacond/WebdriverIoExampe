const { expect } = require('@wdio/globals')
const MachinePage = require('../pageobjects/machine.page')

async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

describe("test one position",()=>{

    beforeEach("before", async()=> {
        await browser.reloadSession()
        await MachinePage.open();
    })


    it("08 price btn color",async()=>{
        const color = await MachinePage.getbtnBuyColor();
        expect(color['parsed']['hex']).toHaveText('#ffffff')

    })

    it("09 btnBuy size",async()=>{
        const size = await MachinePage.getSizebtnBuy();
        expect(size['width']).toBeGreaterThanOrEqual(390);
        expect(size.height).toBeGreaterThanOrEqual(40);

    })

    it("10 image is visable",async()=>{
        await browser.setWindowSize(1920, 1080);
        await browser.scroll(0,4000);
        await browser.scroll(0,3000);
        await browser.scroll(0,-2000);
        expect( await MachinePage.image.isDisplayed()).toBe(true);

    })
})